import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Icon, Form } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import globalUtil from '../../utils/global';
import { pinyin } from 'pinyin-pro';
import AppMarketContent from '../AppMarketContent';
import roleUtil from '../../utils/newRole';
import styles from './index.less';


const LocalMarketModal = ({ visible, onCancel, dispatch, currentEnterprise, groups, form }) => {
  const [apps, setApps] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeTab, setActiveTab] = useState(''); // '', 'enterprise', 'team'
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'install'
  const [selectedApp, setSelectedApp] = useState(null);
  const [addAppLoading, setAddAppLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [installType, setInstallType] = useState('new');
  const listRef = useRef(null);

  useEffect(() => {
    if (visible) {
      // 重置状态并获取应用列表
      setApps([]);
      setSearchValue('');
      setPage(1);
      setActiveTab('');
      setHasMore(true);
      setCurrentView('list');
      setSelectedApp(null);
      fetchApps(1, '', '', true);
    }
  }, [visible]);

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = listElement;
      // 当滚动到底部附近时加载更多
      if (scrollHeight - scrollTop - clientHeight < 100 && hasMore && !loadingMore && !loading) {
        loadMore();
      }
    };

    listElement.addEventListener('scroll', handleScroll);
    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore, loadingMore, loading, page, searchValue, activeTab]);

  const fetchApps = (pageNum = 1, query = '', scope = '', isReset = false) => {
    if (isReset) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    dispatch({
      type: 'market/fetchAppModels',
      payload: {
        enterprise_id: currentEnterprise.enterprise_id,
        app_name: query,
        scope: scope,
        page_size: 9,
        page: pageNum,
        need_install: true,
        is_complete: 1,
        tenant_name: globalUtil.getCurrTeamName()
      },
      callback: data => {
        if (data) {
          const newApps = data.list || [];
          const totalCount = data.total || 0;

          if (isReset) {
            setApps(newApps);
          } else {
            setApps(prev => [...prev, ...newApps]);
          }

          setTotal(totalCount);
          setHasMore(apps.length + newApps.length < totalCount);
        }
        setLoading(false);
        setLoadingMore(false);
      }
    });
  };

  const loadMore = () => {
    if (!hasMore || loadingMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchApps(nextPage, searchValue, activeTab, false);
  };

  const handleSearch = (value) => {
    setPage(1);
    setHasMore(true);
    fetchApps(1, value, activeTab, true);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setPage(1);
    setHasMore(true);
    fetchApps(1, searchValue, key, true);
  };

  const generateEnglishName = (name) => {
    if (name) {
      const pinyinName = pinyin(name, { toneType: 'none' }).replace(/\s/g, '');
      const cleanedPinyinName = pinyinName.toLowerCase();
      return cleanedPinyinName;
    }
    return '';
  };

  const handleInstall = (app) => {
    const versions = app?.versions || app?.versions_info || [];
    const initialVersion = versions.length > 0 ? (versions[0].app_version || versions[0].version) : '';

    setSelectedApp(app);
    setSelectedVersion(initialVersion);
    setCurrentView('install');
    setInstallType('new');

    // 设置表单初始值
    if (form) {
      form.setFieldsValue({
        group_version: initialVersion,
        install_type: 'new',
        group_name: app.app_name || app.name || ''
      });
    }
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedApp(null);
    setAddAppLoading(false);
  };

  const handleChangeVersion = (value) => {
    const versions = selectedApp?.versions || selectedApp?.versions_info || [];
    setSelectedVersion(value);
  };

  const handleSubmitInstall = (e) => {
    e.preventDefault();
    form.validateFields((err, vals) => {
      if (!err) {
        setAddAppLoading(true);
        const teamName = globalUtil.getCurrTeamName();
        const regionName = globalUtil.getCurrRegionName();
        const group_id = globalUtil.getAppID();

        const installApp = (finalGroupId, isNewApp = false) => {
          dispatch({
            type: 'createApp/installApp',
            payload: {
              team_name: teamName,
              ...vals,
              group_id: finalGroupId,
              app_id: selectedApp.app_id,
              is_deploy: true,
              group_key: selectedApp.group_key || selectedApp.ID,
              app_version: vals.group_version,
              marketName: 'localApplication',
              install_from_cloud: false
            },
            callback: () => {
              dispatch({
                type: 'global/fetchGroups',
                payload: {
                  team_name: teamName
                },
                callback: () => {
                  if (isNewApp) {
                    // 新应用安装完成后跳转到应用详情页
                    dispatch(
                      routerRedux.push(
                        `/team/${teamName}/region/${regionName}/apps/${finalGroupId}/overview`
                      )
                    );
                  }
                }
              });
              setAddAppLoading(false);
              onCancel();
            },
            handleError: () => {
              setAddAppLoading(false);
            }
          });
        };

        if (group_id) {
          // 已有 group_id,直接安装
          installApp(group_id);
        } else if (vals.install_type === 'new' && vals.group_name) {
          // 创建新应用,先创建应用获取 group_id,再安装
          const k8s_app = generateEnglishName(vals.group_name);
          dispatch({
            type: 'application/addGroup',
            payload: {
              region_name: regionName,
              team_name: teamName,
              group_name: vals.group_name,
              k8s_app: k8s_app,
              note: '',
            },
            callback: (res) => {
              roleUtil.refreshPermissionsInfo()
              if (res && res.group_id) {
                installApp(res.group_id, true);
              } else {
                setAddAppLoading(false);
              }
            },
            handleError: () => {
              setAddAppLoading(false);
            }
          });
        } else if (vals.install_type === 'existing' && vals.group_id) {
          // 安装到已有应用
          installApp(vals.group_id, true);
        } else {
          setAddAppLoading(false);
        }
      }
    });
  };

  const group_id = globalUtil.getAppID();

  const tabs = [
    { tab: <span><Icon type="search" /> 全部</span>, key: '' },
    { tab: <span><Icon type="bank" /> 公司发布</span>, key: 'enterprise' },
    { tab: <span><Icon type="team" /> 团队发布</span>, key: 'team' }
  ];

  return (
    <Modal
      title={
        currentView === 'list' ? (
          <div className={styles.modalTitle}>
            <Icon type="appstore" className={styles.titleIcon} />
            本地组件库
          </div>
        ) : (
          <div className={styles.modalTitle}>
            <Icon type="arrow-left" className={styles.backIcon} onClick={handleBack} style={{ cursor: 'pointer', marginRight: 8 }} />
            安装组件
          </div>
        )
      }
      visible={visible}
      onCancel={onCancel}
      footer={
        currentView === 'install' ? [
          <Button key="back" onClick={handleBack}>返回</Button>,
          <Button key="install" onClick={handleSubmitInstall} type="primary" loading={addAppLoading}>
            安装
          </Button>
        ] : null
      }
      width={currentView === 'install' ? 500 : 800}
      centered
      className={styles.localMarketModal}
    >
      <AppMarketContent
        currentView={currentView}
        apps={apps}
        loading={loading}
        loadingMore={loadingMore}
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabs={tabs}
        listRef={listRef}
        onInstall={handleInstall}
        selectedApp={selectedApp}
        form={form}
        groups={groups}
        onChangeVersion={handleChangeVersion}
        installType={installType}
        appIcon={require('../../../public/images/app_icon.jpg')}
        onInstallTypeChange={(e) => setInstallType(e.target.value)}
        showResourceInfo={false}
      />
    </Modal>
  );
};

export default connect(({ global, enterprise }) => ({
  currentEnterprise: enterprise.currentEnterprise,
  groups: global.groups
}))(Form.create()(LocalMarketModal));
