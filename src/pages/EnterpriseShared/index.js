/* eslint-disable react/sort-comp */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/alt-text */
import NewbieGuiding from '@/components/NewbieGuiding';
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Empty,
  Icon,
  Input,
  Menu,
  Modal,
  notification,
  Pagination,
  Radio,
  Row,
  Spin,
  Tabs,
  Tooltip
} from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import React, { Fragment, PureComponent } from 'react';
import NoComponent from '../../../public/images/noComponent.png';
import AuthCompany from '../../components/AuthCompany';
import ConfirmModal from '../../components/ConfirmModal';
import CreateAppMarket from '../../components/CreateAppMarket';
import CreateAppModels from '../../components/CreateAppModels';
import CreateHelmAppModels from '../../components/CreateHelmAppModels';
import DeleteApp from '../../components/DeleteApp';
import HelmAppMarket from '../../components/HelmAppMarket';
import InstallStep from '../../components/Introduced/InstallStep';
import PlatformIntroduced from '../../components/Introduced/PlatformIntroduced';
import Lists from '../../components/Lists';
import MarketAppDetailShow from '../../components/MarketAppDetailShow';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { fetchMarketMap } from '../../utils/authority';
import globalUtil from '../../utils/global';
import rainbondUtil from '../../utils/rainbond';
import userUtil from '../../utils/user';
import ExportOperation from './ExportOperation';
import styles from './index.less';
import TagList from './TagList';

const { TabPane } = Tabs;
const { Search } = Input;

@connect(({ user, global, loading }) => ({
  user: user.currentUser,
  novices: global.novices,
  enterprise: global.enterprise,
  upAppMarketLoading: loading.effects['market/upAppMarket'],
  createAppMarketLoading: loading.effects['market/createAppMarket']
}))
export default class EnterpriseShared extends PureComponent {
  constructor(props) {
    super(props);
    const {
      user,
      match: {
        params: { marketName }
      },
      location: {
        query: { init }
      },
      novices,
      enterprise
    } = this.props;
    const appStoreAdmin = userUtil.isPermissions(user, 'app_store');
    this.state = {
      isNewbieGuide: rainbondUtil.isEnableNewbieGuide(enterprise),
      marketPag: {
        pageSize: 10,
        total: 0,
        page: 1,
        query: ''
      },
      helmPag: {
        pageSize: 10,
        total: 0,
        page: 1,
        query: ''
      },
      guideStep: 1,
      pageSize: 10,
      total: 0,
      page: 1,
      componentList: [],
      localLoading: true,
      marketLoading: true,
      helmList: [],
      helmLoading: true,
      appStoreAdmin,
      tagList: [],
      tags: [],
      scope: 'enterprise',
      appInfo: false,
      visibles: null,
      bouncedText: '',
      bouncedType: '',
      deleteApp: false,
      installHelmApp: false,
      deleteAppMarket: false,
      deleteHelmAppMarket: false,
      deleteAppMarketLoading: false,
      deleteHelmAppMarketLoading: false,
      createAppModel: false,
      upDataAppModel: false,
      createAppMarket: false,
      moreTags: false,
      editorTags: false,
      seeTag: false,
      marketList: [],
      marketTab: [],
      helmTab: [],
      initShow: init && rainbondUtil.handleNewbie(novices, 'welcome'),
      activeTabKey: init ? '' : marketName || 'local',
      marketInfo: false,
      helmInfo: false,
      upAppMarket: false,
      upHelmAppMarket: false,
      showCloudMarketAuth: false,
      showApp: {},
      showMarketAppDetail: false,
      appTypes: false,
      isClusters: false,
      isInStallShow: true,
      showMarketCloudAuth: false,
      isAuthorize: false,
      installType: '1',
      isStoreCluster: false
    };
  }
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.load();
    }
  }

  onChangeRadio = e => {
    this.setState(
      {
        page: 1,
        scope: e.target.value
      },
      () => {
        this.getApps();
      }
    );
  };
  onChangeCheckbox = checkedValues => {
    this.setState(
      {
        tags: checkedValues
      },
      () => {
        this.getApps();
      }
    );
  };

  onChangeBounced = chooseVersion => {
    this.setState({
      chooseVersion
    });
  };

  onPageChangeApp = (page, pageSize) => {
    this.setState({ page, pageSize }, () => {
      this.getApps();
    });
  };
  onPageChangeAppMarket = (page, pageSize) => {
    const { marketInfo, marketPag } = this.state;
    const setMarketPag = Object.assign({}, marketPag, {
      page,
      pageSize
    });
    this.setState({ marketPag: setMarketPag }, () => {
      this.getMarkets(marketInfo && marketInfo.name);
    });
  };

  onPageChangeAppHelm = (page, pageSize) => {
    const { helmPag, helmInfo } = this.state;
    const setHelmPag = Object.assign({}, helmPag, {
      page,
      pageSize
    });
    this.setState({ helmPag: setHelmPag }, () => {
      this.getHelmAppStore(helmInfo && helmInfo.name);
    });
  };

  onTabChange = tabID => {
    if (tabID === 'add') {
      this.handleOpencreateAppMarket();
      return null;
    }

    const { marketTab, helmTab } = this.state;
    let arr = [];
    arr = marketTab.filter(item => {
      return item.ID === Number(tabID);
    });

    let helms = [];
    helms = helmTab.filter(item => {
      return item.name === tabID;
    });

    const isArr = arr && arr.length > 0;
    const isHelms = helms && helms.length > 0;

    const showCloudMarketAuth =
      // (isArr && arr[0].access_key === '' && arr[0].domain === 'rainbond') ||
      false;
    this.setState(
      {
        marketInfo: isArr ? arr[0] : false,
        helmInfo: isHelms ? helms[0] : false,
        showCloudMarketAuth,
        activeTabKey: `${tabID}`,
        name: '',
        marketList: [],
        helmList: [],
        helmLoading: true,
        marketLoading: true,
        marketPag: {
          pageSize: 10,
          total: 0,
          page: 1,
          query: ''
        },
        helmPag: {
          pageSize: 10,
          total: 0,
          page: 1,
          query: ''
        }
      },
      () => {
        if (tabID !== 'local' && isHelms) {
          this.getHelmAppStore(helms[0].name);
        } else if (tabID !== 'local' && isArr && arr[0].status === 1) {
          this.getMarkets(arr[0].name);
        } else if (tabID === 'local') {
          this.getApps();
        }
      }
    );
    return null;
  };

  getApps = () => {
    const {
      dispatch,
      user,
      match: {
        params: { eid }
      }
    } = this.props;
    const { page, pageSize, name, scope, tags } = this.state;
    this.setState({ localLoading: true }, () => {
      dispatch({
        type: 'market/fetchAppModels',
        payload: {
          enterprise_id: eid,
          user_id: user.user_id,
          app_name: name,
          scope,
          page,
          page_size: pageSize,
          tags
        },
        callback: res => {
          if (res && res.status_code === 200) {
            this.setState({
              total: res.total,
              componentList: res.list,
              localLoading: false
            });
          }
        }
      });
    });
  };

  getTags = () => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'market/fetchAppModelsTags',
      payload: {
        enterprise_id: eid
      },
      callback: res => {
        if (res && res.status_code === 200) {
          this.setState({
            tagList: res.list
          });
        }
      }
    });
  };

  getMarketsTab = (ID, first) => {
    const {
      dispatch,
      match: {
        params: { eid }
      },
      location: {
        query: { init }
      }
    } = this.props;
    const { activeTabKey } = this.state;
    dispatch({
      type: 'market/fetchMarketsTab',
      payload: {
        enterprise_id: eid
      },
      callback: res => {
        if (res && res.status_code === 200) {
          const list = res.list || [];
          this.setState(
            {
              marketTab: list
            },
            () => {
              if (ID || init || (first && activeTabKey)) {
                const marketID = init && list && list.length && list[0].ID;
                const activeID = first && activeTabKey;
                const setID = marketID || activeID || ID;
                this.onTabChange(setID || ID);
              }
            }
          );
        }
      }
    });
  };

  getHelmMarketsTab = (ID, first) => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    const { activeTabKey } = this.state;
    dispatch({
      type: 'market/fetchHelmMarketsTab',
      payload: {
        enterprise_id: eid
      },
      callback: res => {
        if (res && res.status_code === 200) {
          this.setState(
            {
              helmTab: Array.isArray(res) ? res : []
            },
            () => {
              if (ID || (first && activeTabKey)) {
                this.onTabChange(ID || activeTabKey);
              }
            }
          );
        }
      }
    });
  };

  getMarkets = name => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    const { marketPag } = this.state;
    const payload = Object.assign(
      {},
      {
        name,
        enterprise_id: eid
      },
      marketPag
    );
    this.setState({ marketLoading: true });

    dispatch({
      type: 'market/fetchMarkets',
      payload,
      callback: res => {
        if (res && res.status_code === 200) {
          const setMarketPag = Object.assign({}, this.state.marketPag, {
            total: res.total
          });
          this.setState({
            marketLoading: false,
            marketList: res.list,
            marketPag: setMarketPag
          });
        }
      }
    });
  };

  getHelmAppStore = name => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;

    const { helmPag } = this.state;
    const payload = Object.assign(
      {},
      {
        name,
        enterprise_id: eid
      },
      helmPag
    );
    dispatch({
      type: 'market/fetchHelmAppStore',
      payload,
      callback: res => {
        if (res && res.status_code === 200) {
          const setHelmPag = Object.assign({}, helmPag, {
            total: (res && res.length) || 0
          });
          let helmList = [];
          if (Array.isArray(res)) {
            const helmQuery = helmPag.query;
            const helmPage = helmPag.page;
            if (helmQuery) {
              const arr = [];
              const ql = helmQuery.length;
              res.map(item => {
                if (ql <= item.name.length) {
                  const str = item.name.substring(0, ql);
                  if (str.indexOf(helmQuery) > -1) {
                    arr.push(item);
                  }
                }
              });
              setHelmPag.total = arr.length;
              helmList =
                arr.length > 10 ? arr.splice((helmPage - 1) * 10, 10) : arr;
            } else {
              helmList = res.splice(helmPage > 1 ? (helmPage - 1) * 10 : 0, 10);
            }
          }
          this.setState({
            helmLoading: false,
            helmList,
            helmPag: setHelmPag
          });
        }
      }
    });
  };

  checkStoreHub = () => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'market/storehubCheck',
      payload: {
        eid
      },
      callback: res => {
        if (res && res.status_code === 200 && res.bean.remind) {
          Modal.confirm({
            title: '配置提醒',
            cancelText: '已了解',
            okText: '去配置',
            onCancel: () => {},
            onOk: () => {
              dispatch(routerRedux.push(`/enterprise/${eid}/setting`));
            },
            content:
              '该平台已对接多个集群，但本地组件库暂未配置多集群可用的镜像仓库，将导致应用无法跨集群安装。'
          });
        }
      }
    });
  };

  load = () => {
    this.loadClusters();
    this.getApps();
    this.getTags();
    this.getMarketsTab(false, true);
    this.getHelmMarketsTab(false, true);
    this.checkStoreHub();
  };
  loadClusters = () => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'region/fetchEnterpriseClusters',
      payload: {
        enterprise_id: eid,
        check_status: 'no'
      },
      callback: res => {
        if (res && res.list && res.list.length) {
          this.setState({
            isClusters: true
          });
        }
      }
    });
  };
  handleSearchLocal = name => {
    this.setState(
      {
        page: 1,
        name
      },
      () => {
        this.getApps();
      }
    );
  };
  handleSearchMarket = query => {
    const { marketPag, marketInfo } = this.state;

    const setMarketPag = Object.assign({}, marketPag, {
      page: 1,
      query
    });
    this.setState(
      {
        marketPag: setMarketPag
      },
      () => {
        this.getMarkets(marketInfo && marketInfo.name);
      }
    );
  };
  handleSearchHelmMarket = query => {
    const { helmPag, helmInfo } = this.state;
    const setMarketPag = Object.assign({}, helmPag, {
      page: 1,
      query
    });
    this.setState(
      {
        helmLoading: true,
        helmPag: setMarketPag
      },
      () => {
        this.getHelmAppStore(helmInfo && helmInfo.name);
      }
    );
  };
  handleOpenEditorMoreTags = () => {
    this.setState({ moreTags: true, editorTags: true });
  };
  handleOpenMoreTags = seeTag => {
    this.setState({ moreTags: true, seeTag });
  };
  handleCloseMoreTags = () => {
    this.setState({ moreTags: false, editorTags: false, seeTag: false });
  };

  showOfflineApp = appInfo => {
    this.setState({
      appInfo,
      deleteApp: true,
      bouncedText: '删除应用模版',
      bouncedType: 'delete'
    });
  };

  installHelmApp = (appInfo, types) => {
    this.setState({
      appInfo,
      appTypes: types,
      installHelmApp: true
    });
  };

  handleOpenDeleteAppMarket = () => {
    this.setState({ deleteAppMarket: true });
  };
  handleCloseDeleteAppMarket = () => {
    this.setState({ deleteAppMarket: false });
  };
  handleOpenDeleteHelmAppMarket = () => {
    this.setState({ deleteHelmAppMarket: true });
  };
  handleCloseDeleteHelmAppMarket = () => {
    this.setState({ deleteHelmAppMarket: false });
  };
  handleOkBounced = values => {
    const { bouncedType } = this.state;
    this.setState(
      {
        chooseVersion: values.chooseVersion
      },
      () => {
        if (bouncedType === 'delete') {
          this.setState({
            deleteApp: true
          });
        } else {
          this.handleCloudsUpdate(values.chooseVersion);
        }
      }
    );
  };
  handleDeleteApp = () => {
    const { appInfo } = this.state;
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'global/deleteAppModel',
      payload: {
        enterprise_id: eid,
        app_id: appInfo.app_id
      },
      callback: res => {
        if (res && res.status_code === 200) {
          notification.success({
            message: '删除成功'
          });
          this.handleCancelDelete();
          this.getApps();
        }
      }
    });
  };
  handleDeleteAppMarket = () => {
    const { marketInfo } = this.state;
    this.setState({ deleteAppMarketLoading: true });
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'market/deleteAppMarket',
      payload: {
        enterprise_id: eid,
        marketName: marketInfo.name
      },
      callback: res => {
        if (res && res.status_code === 200) {
          this.handleCloseDeleteAppMarket();
          this.getMarketsTab();
          this.setState({
            activeTabKey: 'local',
            marketInfo: false,
            deleteAppMarketLoading: false
          });
          notification.success({
            message: '删除成功'
          });
        }
      }
    });
  };
  handleDeleteHelmAppMarket = () => {
    const { helmInfo } = this.state;
    this.setState({ deleteHelmAppMarketLoading: true });
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'market/deleteHelmAppStore',
      payload: {
        enterprise_id: eid,
        name: helmInfo.name
      },
      callback: res => {
        if (res && res.status_code === 200) {
          this.handleCloseDeleteHelmAppMarket();
          this.getHelmMarketsTab();
          this.setState({
            activeTabKey: 'local',
            helmInfo: false,
            deleteHelmAppMarketLoading: false
          });
          notification.success({
            message: '删除成功'
          });
        }
      }
    });
  };
  handleCancelDelete = () => {
    this.setState({
      installHelmApp: null,
      appTypes: null,
      deleteApp: null,
      visibles: null,
      bouncedText: '',
      bouncedType: '',
      appInfo: false
    });
  };

  handlePageChange = page => {
    this.state.page = page;
    this.getApps();
  };

  handleLoadAppDetail = (item, text) => {
    const versions_info =
      item.versions_info && item.versions_info.length > 0 && item.versions_info;
    if (versions_info) {
      this.setState({
        visibles: true,
        appInfo: item,
        bouncedText: text
      });
    } else {
      this.setState({ appInfo: item }, () => {
        if (versions_info) {
          this.handleCloudsUpdate(versions_info[0].version);
        }
      });
    }
  };

  // 云更新
  handleCloudsUpdate = chooseVersion => {
    const { appInfo } = this.state;
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch({
      type: 'global/syncMarketAppDetail',
      payload: {
        enterprise_id: eid,
        body: {
          app_id: appInfo.app_id,
          app_versions: chooseVersion
        }
      },
      callback: res => {
        if (res && res.status_code === 200) {
          this.handleCancelDelete();
          notification.success({ message: '更新成功' });
          this.getApps();
        }
      }
    });
  };

  handleCreateAppModel = () => {
    notification.success({ message: '创建成功' });
    this.getApps();
    this.handleCancelAppModel();
  };

  handleCreateAppMarket = ID => {
    const { upAppMarket } = this.state;
    notification.success({ message: upAppMarket ? '编辑成功' : '创建成功' });
    this.getMarketsTab(ID);
    this.handleCancelAppMarket();
  };
  handleUpHelmAppMarket = ID => {
    notification.success({ message: '编辑成功' });
    this.getHelmMarketsTab(ID);
    this.handleCancelHelmAppMarket();
  };

  handleCancelAppModel = () => {
    this.setState({
      createAppModel: false,
      appInfo: null
    });
  };
  handleOpenCreateAppModel = () => {
    this.setState({
      createAppModel: true
    });
  };

  handleOpenUpAppMarket = () => {
    this.setState({
      upAppMarket: true
    });
  };
  handleOpenUpHelmAppMarket = () => {
    this.setState({
      upHelmAppMarket: true
    });
  };
  handleCancelHelmAppMarket = () => {
    this.setState({
      // createAppMarket: false,
      upHelmAppMarket: false
    });
  };
  handleOpencreateAppMarket = () => {
    this.setState({
      createAppMarket: true
    });
  };
  handleCancelAppMarket = () => {
    this.setState({
      createAppMarket: false,
      upAppMarket: false
    });
  };
  handleupDataAppModel = () => {
    notification.success({ message: '编辑成功' });
    this.getApps();
    this.handleCancelupDataAppModel();
  };

  handleOpenUpDataAppModel = appInfo => {
    this.setState({
      appInfo,
      upDataAppModel: true
    });
  };
  handleAppModel = appInfo => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    dispatch(
      routerRedux.push(`/enterprise/${eid}/shared/app/${appInfo.app_id}`)
    );
  };

  handleCancelupDataAppModel = () => {
    this.setState({
      appInfo: null,
      installHelmApp: false,
      appTypes: null,
      upDataAppModel: false
    });
  };
  showMarketAppDetail = app => {
    // cloud app
    if (app && app.app_detail_url) {
      window.open(app.app_detail_url, '_blank');
      return;
    }
    this.setState({
      showApp: app,
      showMarketAppDetail: true
    });
  };
  hideMarketAppDetail = () => {
    this.setState({
      showApp: {},
      showMarketAppDetail: false
    });
  };
  handleLists = (types, managementMenu, item, pic, versions, indexs) => {
    const {
      app_id: appId,
      describe,
      app_name: appName,
      name = '',
      tags,
      dev_status: devStatus,
      install_number: installNumber
    } = item;
    const defaulAppImg = globalUtil.fetchSvg('defaulAppImg');
    const isLocalsContent = types !== 'marketContent';
    const isHelmContent = types === 'helmContent';
    const {
      guideStep,
      initShow,
      activeTabKey,
      marketInfo,
      isClusters
    } = this.state;
    const helmInfo =
      isHelmContent && versions && versions.length > 0 && versions[0];
    const isReadInstall =
      marketInfo &&
      marketInfo.access_actions &&
      marketInfo.access_actions.length &&
      marketInfo.access_actions.includes('ReadInstall');
    return (
      <Fragment>
        {!initShow &&
          activeTabKey !== 'local' &&
          guideStep === 1 &&
          indexs === 0 &&
          this.handleNewbieGuiding({
            tit: '安装应用',
            send: true,
            configName: 'installApp',
            desc:
              '从应用商店安装应用是最简单的应用部署方式，后面你也可以很方便的将您的企业应用发布到应用商店中',
            nextStep: 2,
            conPosition: { right: 0, marginTop: '60px' },
            svgPosition: { right: 0, marginTop: '27px' },
            handleClick: () => {
              this.installHelmApp(item, types);
            }
          })}
        <Lists
          key={appId}
          stylePro={{ marginBottom: '10px' }}
          Cols={
            <div
              className={styles.h70}
              onClick={e => {
                e.stopPropagation();
                if (types === 'localsContent') {
                  this.handleAppModel(item);
                }
              }}
            >
              <Col span={3} style={{ display: 'flex' }}>
                {!isHelmContent && (
                  <div
                    className={styles.lt}
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    <Tooltip title="安装量">
                      <div title={installNumber}>
                        {globalUtil.nFormatter(installNumber)}
                      </div>
                    </Tooltip>
                  </div>
                )}
                <div className={styles.imgs}>
                  {pic ? <img src={pic} alt="" /> : defaulAppImg}
                </div>
              </Col>
              <Col span={13} className={styles.tits}>
                <div>
                  <p>
                    <a
                      onClick={e => {
                        e.stopPropagation();
                        this.showMarketAppDetail(item);
                      }}
                    >
                      {appName || name}
                    </a>
                  </p>
                  <p>
                    <Tooltip
                      placement="topLeft"
                      title={(helmInfo && helmInfo.description) || describe}
                    >
                      {(helmInfo && helmInfo.description) || describe}
                    </Tooltip>
                  </p>
                </div>
              </Col>
              <Col span={3} className={styles.status}>
                <div>
                  {devStatus && (
                    <p className={styles.dev_status}>{devStatus}</p>
                  )}
                  {versions && versions.length > 0 ? (
                    <p className={styles.dev_version}>
                      {isLocalsContent
                        ? versions[isHelmContent ? 0 : versions.length - 1]
                            .version
                        : versions[0].app_version}
                    </p>
                  ) : (
                    <p className={styles.dev_version}>无版本</p>
                  )}
                </div>
              </Col>
              <Col span={4} className={styles.tags}>
                {tags &&
                  tags.length > 0 &&
                  tags.map((items, index) => {
                    if (index > 2) {
                      return null;
                    }
                    return (
                      <div
                        key={isLocalsContent ? items.tag_id : items}
                        style={{ marginRight: '5px' }}
                      >
                        {isLocalsContent ? items.name : items}
                      </div>
                    );
                  })}
                {tags && tags.length > 3 && (
                  <a
                    style={{ marginLeft: '5px' }}
                    onClick={e => {
                      e.stopPropagation();
                      const customTags = isLocalsContent
                        ? tags.map(items => items.name)
                        : tags;
                      this.handleOpenMoreTags(customTags);
                    }}
                  >
                    更多
                  </a>
                )}
              </Col>
              <Col
                span={1}
                className={styles.tags}
                style={{ justifyContent: 'center' }}
              >
                <div
                  className={styles.installBox}
                  style={{ background: '#fff' }}
                  onClick={e => {
                    e.stopPropagation();
                    if (
                      (isReadInstall && marketInfo && isClusters) ||
                      types !== 'marketContent'
                    ) {
                      this.installHelmApp(item, types);
                    } else {
                      this.setState({
                        isInStallShow: true,
                        guideStep: 'Jump'
                      });
                    }
                  }}
                >
                  {globalUtil.fetchSvg('InstallApp')}
                  <div style={{ background: '#fff' }}>安装</div>
                </div>
              </Col>
            </div>
          }
          overlay={managementMenu ? managementMenu(item) : null}
        />
      </Fragment>
    );
  };
  handleNewbieGuiding = info => {
    const { isClusters, marketInfo } = this.state;
    const { prevStep, nextStep, handleClick = () => {} } = info;
    const isReadInstall =
      marketInfo &&
      marketInfo.access_actions &&
      marketInfo.access_actions.length &&
      marketInfo.access_actions.includes('ReadInstall');

    return (
      <NewbieGuiding
        {...info}
        totals={2}
        handleClose={() => {
          this.handleGuideStep('close');
        }}
        handlePrev={() => {
          if (prevStep) {
            if (prevStep === 1) {
              this.handleCancelupDataAppModel();
            }
            this.handleGuideStep(prevStep);
          }
        }}
        handleNext={() => {
          if (nextStep) {
            if (nextStep === 2) {
              if (isClusters) {
                this.handleGuideStep(nextStep);
                handleClick();
                if (!isReadInstall) {
                  this.setState({
                    // isInStallShow: true,
                    // guideStep: 'Jump'
                    showCloudMarketAuth: true
                  });
                  return null;
                }
              } else {
                this.handleGuideStep('Jump');
              }
              return null;
            }
            handleClick();
            this.handleGuideStep(nextStep);
          }
        }}
      />
    );
  };
  handleGuideStep = guideStep => {
    this.setState({
      guideStep
    });
  };
  hideInitShow = () => {
    this.putNewbieGuideConfig('welcome');
    this.setState({ initShow: false });
  };
  putNewbieGuideConfig = configName => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/putNewbieGuideConfig',
      payload: {
        arr: [{ key: configName, value: true }]
      }
    });
  };
  hideInstallStep = (isNext, installType) => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    const { isAuthorize } = this.state;
    this.setState({ isInStallShow: false });
    if (isNext) {
      if ((isAuthorize && installType == 1) || installType == 2) {
        if (isAuthorize && installType == 1) {
          this.setState({ isStoreCluster: true });
        }
        this.setState({ installType });
        sessionStorage.setItem('isAuthorize', isAuthorize);
        dispatch(routerRedux.push(`/enterprise/${eid}/clusters`));
      } else {
        this.setState({ showMarketCloudAuth: true });
      }
    } else {
      this.setState({ isInStallShow: false });
    }
  };
  onCloseLogin = () => {
    this.setState({ isInStallShow: true, isAuthorize: true });
  };
  render() {
    const {
      match: {
        params: { eid }
      },
      upAppMarketLoading
    } = this.props;

    const {
      appStoreAdmin: {
        isCreateApp,
        isEditApp,
        isDeleteApp,
        isImportApp,
        isExportApp,
        isCreateAppStore,
        isEditAppStore,
        isDeleteAppStore
      },
      editorTags,
      componentList,
      marketList,
      marketTab,
      helmTab,
      localLoading,
      marketLoading,
      helmLoading,
      helmList,
      tagList,
      appInfo,
      appTypes,
      visibles,
      bouncedText,
      showCloudMarketAuth,
      upDataAppModel,
      upAppMarket,
      upHelmAppMarket,
      createAppMarket,
      createAppModel,
      deleteAppMarket,
      deleteHelmAppMarket,
      deleteApp,
      installHelmApp,
      moreTags,
      showMarketAppDetail,
      deleteAppMarketLoading,
      deleteHelmAppMarketLoading,
      activeTabKey,
      marketInfo,
      helmInfo,
      marketPag,
      helmPag,
      seeTag,
      guideStep,
      initShow,
      isNewbieGuide,
      isInStallShow,
      showMarketCloudAuth,
      isAuthorize
    } = this.state;
    const tagLists = tagList && tagList.length > 0 && tagList;
    const accessActions =
      marketInfo &&
      marketInfo.access_actions &&
      marketInfo.access_actions.length > 0 &&
      marketInfo.access_actions;

    const isMarket = marketInfo && marketInfo.status == 1;
    const managementMenu = info => {
      const delApp = isDeleteApp && (
        <Menu.Item>
          <a
            onClick={() => {
              this.showOfflineApp(info);
            }}
          >
            删除应用模版
          </a>
        </Menu.Item>
      );
      const editorApp = isEditApp && (
        <Menu.Item>
          <a
            onClick={() => {
              this.handleOpenUpDataAppModel(info);
            }}
          >
            编辑应用模版
          </a>
        </Menu.Item>
      );
      const exportOperation = info &&
        info.versions_info &&
        info.versions_info.length > 0 && (
          <Menu.Item>
            <ExportOperation app={info} eid={eid} />
          </Menu.Item>
        );

      if (exportOperation || editorApp || delApp) {
        return (
          <Menu>
            {isExportApp && exportOperation}
            {editorApp}
            {delApp}
          </Menu>
        );
      }
      return null;
    };

    const contentStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      marginTop: '4px'
    };
    const contentLeftStyle = {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center'
    };
    const rightStyle = {
      textAlign: 'right'
    };

    const operation = (
      <Col span={5} style={rightStyle} className={styles.btns}>
        {isImportApp && (
          <Button style={{ margin: '0 14px 0 10px' }}>
            <Link to={`/enterprise/${eid}/shared/import`}>离线导入</Link>
          </Button>
        )}
        {isCreateApp && (
          <Button type="primary" onClick={this.handleOpenCreateAppModel}>
            创建应用模版
          </Button>
        )}
      </Col>
    );

    const marketOperation = (
      <div>
        {isDeleteAppStore && (
          <Button
            onClick={this.handleOpenDeleteAppMarket}
            style={{ marginRight: '22px' }}
          >
            删除
          </Button>
        )}
        {isEditAppStore && (
          <Button type="primary" onClick={this.handleOpenUpAppMarket}>
            编辑
          </Button>
        )}
      </div>
    );
    const helmOperation = (
      <div>
        <Button
          onClick={this.handleOpenDeleteHelmAppMarket}
          style={{ marginRight: '22px' }}
        >
          删除
        </Button>
        <Button
          style={{ marginRight: '22px' }}
          type="primary"
          onClick={this.handleOpenUpHelmAppMarket}
        >
          编辑
        </Button>
        <Button
          onClick={() => {
            this.handleSearchHelmMarket();
          }}
        >
          <Icon type="reload" />
        </Button>
      </div>
    );

    const noLocalMarket = (
      <div className={styles.noShared}>
        <img src={NoComponent} />
        <p>当前无应用模版，请选择方式添加</p>
        <div className={styles.btns}>
          {isCreateApp && (
            <Button type="primary" onClick={this.handleOpenCreateAppModel}>
              创建应用模版
            </Button>
          )}
          {isImportApp && (
            <Button type="primary">
              <Link to={`/enterprise/${eid}/shared/import`}>导入应用模版</Link>
            </Button>
          )}
        </div>
      </div>
    );

    const noCloudMarket = isHelm => (
      <Empty
        style={{ marginTop: '120px' }}
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60
        }}
        description={
          <span>
            {!isHelm && !isMarket ? '市场未连接、暂无数据' : '暂无数据'}
          </span>
        }
      >
        {!isHelm && !isMarket && marketOperation}
      </Empty>
    );

    const localsContent = (
      <div>
        <Row style={contentStyle}>
          <Col span={19} style={contentLeftStyle}>
            <Search
              style={{ width: '250px' }}
              placeholder="请输入名称进行搜索"
              onSearch={this.handleSearchLocal}
            />
            <div className={styles.serBox}>
              <Radio.Group
                className={styles.setRadioGroup}
                value={this.state.scope}
                onChange={this.onChangeRadio}
              >
                <Radio.Button value="enterprise">企业</Radio.Button>
                <Radio.Button value="team">团队</Radio.Button>
              </Radio.Group>
              {tagLists && <Divider type="vertical" />}
              {tagLists && (
                <Checkbox.Group
                  className={styles.setCheckboxGroup}
                  onChange={this.onChangeCheckbox}
                  value={this.state.tags}
                >
                  {tagLists.map((item, index) => {
                    const { name, tag_id: id } = item;
                    if (index > 4) {
                      return null;
                    }
                    return (
                      <Checkbox key={id} value={name}>
                        {name}
                      </Checkbox>
                    );
                  })}
                  <a onClick={this.handleOpenEditorMoreTags} style={rightStyle}>
                    更多标签
                  </a>
                </Checkbox.Group>
              )}
            </div>
          </Col>
          {operation}
        </Row>
        {localLoading ? (
          <div className={styles.example}>
            <Spin />
          </div>
        ) : componentList && componentList.length > 0 ? (
          componentList.map((item, index) => {
            const { pic, versions_info: versions } = item;
            return this.handleLists(
              'localsContent',
              managementMenu,
              item,
              pic,
              versions,
              index
            );
          })
        ) : (
          noLocalMarket
        )}

        <div style={rightStyle}>
          <Pagination
            showQuickJumper
            current={this.state.page}
            pageSize={this.state.pageSize}
            total={Number(this.state.total)}
            onChange={this.onPageChangeApp}
          />
        </div>
      </div>
    );
    const marketContent = (
      <div>
        {isMarket && (
          <Row style={contentStyle}>
            <Col span={19} style={contentLeftStyle}>
              <div>
                市场已经正常连接，该平台具有&nbsp;
                {accessActions &&
                  accessActions.map((item, index) => {
                    return (
                      <a>
                        {fetchMarketMap(item)}
                        {index < accessActions.length - 1 && (
                          <Divider
                            type="vertical"
                            style={{ background: '#1890ff' }}
                          />
                        )}
                      </a>
                    );
                  })}
                &nbsp;应用权限
              </div>
              <Search
                style={{ width: '400px', marginLeft: '100px' }}
                placeholder="请输入名称进行搜索"
                onSearch={this.handleSearchMarket}
              />
            </Col>
            <Col span={5} style={rightStyle} className={styles.btns}>
              {marketOperation}
            </Col>
          </Row>
        )}
        {marketLoading ? (
          <div className={styles.example}>
            <Spin />
          </div>
        ) : marketList && marketList.length > 0 ? (
          marketList.map((item, index) => {
            const { logo, versions } = item;
            return this.handleLists(
              'marketContent',
              null,
              item,
              logo,
              versions,
              index
            );
          })
        ) : (
          noCloudMarket(false)
        )}

        <div style={rightStyle}>
          <Pagination
            showQuickJumper
            current={marketPag.page}
            pageSize={marketPag.pageSize}
            total={Number(marketPag.total)}
            onChange={this.onPageChangeAppMarket}
          />
        </div>
      </div>
    );
    const helmContent = (
      <div>
        <Row style={contentStyle}>
          <Col span={19} style={contentLeftStyle}>
            <Search
              style={{ width: '400px' }}
              placeholder="请输入名称进行搜索"
              onSearch={this.handleSearchHelmMarket}
            />
          </Col>
          <Col span={5} style={rightStyle} className={styles.btns}>
            {helmOperation}
          </Col>
        </Row>

        {helmLoading ? (
          <div className={styles.example}>
            <Spin />
          </div>
        ) : helmList && helmList.length > 0 ? (
          helmList.map((item, index) => {
            const { versions } = item;
            return this.handleLists(
              'helmContent',
              null,
              item,
              versions && versions.length > 0 && versions[0].icon,
              versions,
              index
            );
          })
        ) : (
          noCloudMarket(true)
        )}

        <div style={rightStyle}>
          <Pagination
            showQuickJumper
            current={helmPag.page}
            pageSize={helmPag.pageSize}
            total={Number(helmPag.total)}
            onChange={this.onPageChangeAppHelm}
          />
        </div>
      </div>
    );
    return (
      <PageHeaderLayout
        title="应用市场管理"
        content="应用市场支持Rainstore应用商店和Helm应用商店的对接和管理"
      >
        {initShow && isNewbieGuide && (
          <PlatformIntroduced onCancel={this.hideInitShow} />
        )}

        {guideStep === 'Jump' && isInStallShow && (
          <InstallStep
            onCancel={this.hideInstallStep}
            isAuthorize={isAuthorize}
            eid={eid}
            installType={this.state.installType}
            isStoreCluster={this.state.isStoreCluster}
          />
        )}

        {showMarketCloudAuth && (
          <AuthCompany
            eid={eid}
            marketName={marketInfo.name}
            title="欢迎使用该平台，请先完成连接云应用商店授权"
            onCancel={() => {
              this.setState({ showMarketCloudAuth: false });
            }}
            currStep={2}
            isReload
            onCloseLogin={this.onCloseLogin}
          />
        )}
        {showMarketAppDetail && (
          <MarketAppDetailShow
            onOk={this.hideMarketAppDetail}
            onCancel={this.hideMarketAppDetail}
            app={this.state.showApp}
          />
        )}
        {moreTags && (
          <TagList
            title="查看标签"
            onOk={this.handleCloseMoreTags}
            onChangeCheckbox={this.onChangeCheckbox}
            onCancel={this.handleCloseMoreTags}
            tagLists={tagLists}
            seeTag={seeTag}
            checkedValues={this.state.tags}
            componentList={componentList}
            editorTags={editorTags}
          />
        )}
        {deleteApp && (
          <ConfirmModal
            onOk={this.handleDeleteApp}
            desc="确定要删除此应用模型吗?"
            subDesc="删除后其他人将无法安装此应用模型"
            title="删除应用模版"
            onCancel={this.handleCancelDelete}
          />
        )}

        {installHelmApp && (
          <CreateHelmAppModels
            title="安装应用"
            eid={eid}
            appTypes={appTypes}
            appInfo={appInfo}
            helmInfo={helmInfo}
            onOk={this.handleupDataAppModel}
            onCancel={this.handleCancelupDataAppModel}
          />
        )}
        {deleteAppMarket && (
          <ConfirmModal
            onOk={this.handleDeleteAppMarket}
            loading={deleteAppMarketLoading}
            subDesc="此操作不可恢复"
            desc="确定要删除此商店吗?"
            title="删除应用商店"
            onCancel={this.handleCloseDeleteAppMarket}
          />
        )}
        {deleteHelmAppMarket && (
          <ConfirmModal
            onOk={this.handleDeleteHelmAppMarket}
            loading={deleteHelmAppMarketLoading}
            subDesc="此操作不可恢复"
            desc="确定要删除此商店吗?"
            title="删除Helm应用商店"
            onCancel={this.handleCloseDeleteHelmAppMarket}
          />
        )}

        {createAppModel && (
          <CreateAppModels
            title="创建应用模版"
            eid={eid}
            onOk={this.handleCreateAppModel}
            onCancel={this.handleCancelAppModel}
          />
        )}

        {createAppMarket && (
          <AuthCompany
            isHelm
            eid={eid}
            title="添加应用商店"
            onOk={this.getHelmMarketsTab}
            onCancel={this.handleCancelAppMarket}
            currStep={1}
          />
        )}
        {/* {this.state.createAppMarket && (
          <CreateAppMarket
            title="添加应用商店"
            eid={eid}
            loading={createAppMarketLoading}
            onOk={this.handleCreateAppMarket}
            onCancel={this.handleCancelAppMarket}
          />
        )} */}
        {upAppMarket && (
          <CreateAppMarket
            title="编辑应用商店连接信息"
            eid={eid}
            loading={upAppMarketLoading}
            marketInfo={marketInfo}
            onOk={this.handleCreateAppMarket}
            onCancel={this.handleCancelAppMarket}
          />
        )}
        {upHelmAppMarket && (
          <HelmAppMarket
            title={`编辑${helmInfo.name}商店`}
            eid={eid}
            data={helmInfo}
            onOk={this.handleUpHelmAppMarket}
            onCancel={this.handleCancelHelmAppMarket}
          />
        )}

        {upDataAppModel && (
          <CreateAppModels
            title="编辑应用模版"
            eid={eid}
            appInfo={appInfo}
            onOk={this.handleupDataAppModel}
            onCancel={this.handleCancelupDataAppModel}
          />
        )}
        {visibles && (
          <DeleteApp
            appInfo={appInfo}
            bouncedText={bouncedText}
            onOk={this.handleOkBounced}
            onCancel={this.handleCancelDelete}
            onCheckedValues={this.onChangeBounced}
          />
        )}

        {showCloudMarketAuth && (
          <AuthCompany
            eid={eid}
            marketName={marketInfo.name}
            title="您在该云应用商店无安装权限，请登录获取授权"
            onCancel={() => {
              this.setState({ showCloudMarketAuth: false });
            }}
            currStep={2}
          />
        )}
        <Tabs
          activeKey={activeTabKey}
          className={styles.setTabs}
          onChange={this.onTabChange}
        >
          <TabPane
            tab={
              <span className={styles.verticalCen}>
                {globalUtil.fetchSvg('localMarket')}
                本地组件库
              </span>
            }
            key="local"
          >
            <div
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {localsContent}
            </div>
          </TabPane>
          {marketTab.map(item => {
            const { ID, alias, name } = item;
            return (
              <TabPane
                tab={
                  <span className={styles.verticalCen}>
                    {globalUtil.fetchSvg('cloudMarket')}
                    {alias || name}
                  </span>
                }
                key={ID}
              >
                {marketContent}
              </TabPane>
            );
          })}
          {helmTab.map(item => {
            const { name } = item;
            return (
              <TabPane
                tab={
                  <span className={styles.verticalCen}>
                    {globalUtil.fetchSvg('HelmSvg')}
                    {name}
                  </span>
                }
                key={name}
              >
                {helmContent}
              </TabPane>
            );
          })}

          {isCreateAppStore && (
            <TabPane
              tab={
                <Tooltip placement="top" title="添加应用市场">
                  <Icon type="plus" className={styles.addSvg} />
                </Tooltip>
              }
              key="add"
            />
          )}
        </Tabs>
      </PageHeaderLayout>
    );
  }
}
