import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Modal, Input } from 'antd';
import { connect } from 'dva';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'dva/router';
import styles from './index.less';
import CollectionView from './CollectionView';
import ConfirmModal from '../ConfirmModal';

const { Sider } = Layout;
const { Search } = Input;

@connect(({ loading, global }) => ({
  rainbondInfo: global.rainbondInfo,
}))
export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collectionVisible: false,
      delcollectionVisible: false,
      collectionInfo: false,
      collectionList: [],
      page: 1,
      page_size: 10,
      name: '',
      userTeamList: [],
      isSearch: false,
    };
  }

  componentDidMount() {
    this.fetchCollectionViewInfo();
    this.getUserTeams();
  }

  // conversion Path 转化路径
  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  };

  handleOpenChange = openKeys => {
    // const lastOpenKey = openKeys[openKeys.length - 1]; const isMainMenu =
    // this.props.menuData.some(   item => lastOpenKey && (item.key === lastOpenKey
    // || item.path === lastOpenKey) );
    this.setState({
      openKeys: [...openKeys],
    });
  };

  handleOpenCollectionVisible = () => {
    this.setState({
      collectionVisible: true,
    });
  };
  handleCloseCollectionVisible = () => {
    this.setState({
      collectionVisible: false,
    });
  };

  handleOpenDelCollectionVisible = collectionInfo => {
    this.setState({
      delcollectionVisible: true,
      collectionInfo,
    });
  };
  handleCloseDelCollectionVisible = () => {
    this.setState({
      delcollectionVisible: false,
      collectionInfo: false,
    });
  };

  fetchCollectionViewInfo = () => {
    const { dispatch, eid } = this.props;
    dispatch({
      type: 'user/fetchCollectionViewInfo',
      payload: {
        enterprise_id: eid,
      },
      callback: res => {
        if (res) {
          this.setState({
            collectionList: res.list,
          });
        }
      },
    });
  };

  putCollectionViewInfo = () => {
    const { dispatch, eid } = this.props;
    dispatch({
      type: 'user/putCollectionViewInfo',
      payload: {
        enterprise_id: eid,
      },
      callback: res => {
        console.log('res', res);
        if (res) {
        }
      },
    });
  };

  deleteCollectionViewInfo = () => {
    const { dispatch, eid } = this.props;
    const { collectionInfo } = this.state;
    dispatch({
      type: 'user/deleteCollectionViewInfo',
      payload: {
        favorite_id: collectionInfo && collectionInfo.favorite_id,
        enterprise_id: eid,
      },
      callback: res => {
        if (res) {
          this.fetchCollectionViewInfo();
          this.handleCloseDelCollectionVisible();
        }
      },
    });
  };

  handleCollectionView = values => {
    const { dispatch, location, eid } = this.props;
    const index = location.hash.indexOf('#');
    const result = location.hash.substr(index + 1, location.hash.length);
    dispatch({
      type: 'user/addCollectionView',
      payload: {
        enterprise_id: eid,
        name: values.name,
        url: result,
      },
      callback: res => {
        if (res) {
          this.fetchCollectionViewInfo();
          this.handleCloseCollectionVisible();
        }
      },
    });
  };

  handleOnSearchTeam = name => {
    this.setState(
      {
        name,
      },
      () => {
        this.getUserTeams();
      }
    );
  };

  getUserTeams = () => {
    const { dispatch, currentUser, eid } = this.props;
    const { page, page_size, name } = this.state;
    dispatch({
      type: 'global/fetchUserTeams',
      payload: {
        enterprise_id: eid,
        user_id: currentUser.user_id,
        page,
        page_size,
        name,
      },
      callback: res => {
        if (res && res._code === 200) {
          this.setState({
            userTeamList: res.list,
            userTeamsLoading: false,
          });
        }
      },
    });
  };
  handleIsShowSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch,
    });
  };

  render() {
    const { collapsed, onCollapse, enterpriseList } = this.props;
    const {
      collectionVisible,
      collectionList,
      delcollectionVisible,
      userTeamList,
      isSearch,
    } = this.state;

    const userTeam = userTeamList && userTeamList.length > 0 && userTeamList;

    const addSvg = () => (
      <svg
        t="1582773482475"
        viewBox="0 0 1024 1024"
        p-id="7257"
        width="14"
        height="14"
      >
        <path
          d="M512 64c60.5 0 119.2 11.8 174.4 35.2 53.3 22.6 101.3 54.9 142.4 96 41.2 41.2 73.5 89.1 96 142.4C948.2 392.8 960 451.5 960 512s-11.8 119.2-35.2 174.4c-22.6 53.3-54.9 101.3-96 142.4-41.2 41.2-89.1 73.5-142.4 96C631.2 948.2 572.5 960 512 960s-119.2-11.8-174.4-35.2c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512s11.8-119.2 35.2-174.4c22.6-53.3 54.9-101.3 96-142.4s89.1-73.5 142.4-96C392.8 75.8 451.5 64 512 64m0-64C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z"
          fill="#8C92A4"
          p-id="7258"
        />
        <path
          d="M764 480H260c-17.6 0-32 14.4-32 32s14.4 32 32 32h504c17.6 0 32-14.4 32-32s-14.4-32-32-32z"
          fill="#8C92A4"
          p-id="7259"
        />
        <path
          d="M512 228c-17.6 0-32 14.4-32 32v504c0 17.6 14.4 32 32 32s32-14.4 32-32V260c0-17.6-14.4-32-32-32z"
          fill="#8C92A4"
          p-id="7260"
        />
      </svg>
    );
    const delSvg = () => (
      <svg
        t="1582773213217"
        viewBox="0 0 1024 1024"
        p-id="6234"
        width="14"
        height="14"
      >
        <path
          d="M874.230791 149.769209a512 512 0 1 0 0 724.461582 512.884029 512.884029 0 0 0 0-724.461582z m-41.402014 683.059568a453.506763 453.506763 0 1 1 0-641.657554 454.317122 454.317122 0 0 1 0 641.657554z"
          fill="#8C92A4"
          p-id="6235"
        />
        <path
          d="M758.791367 482.532374H265.576978a29.467626 29.467626 0 1 0 0 58.935252H758.791367a29.467626 29.467626 0 1 0 0-58.935252z"
          fill="#8C92A4"
          p-id="6236"
        />
      </svg>
    );

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={onCollapse}
        width={0}
        collapsedWidth={300}
        className={styles.sider}
      >
        <CollectionView
          title={formatMessage({ id: 'sidecar.collection.add' })}
          visible={collectionVisible}
          onOk={this.handleCollectionView}
          onCancel={this.handleCloseCollectionVisible}
        />

        {delcollectionVisible && (
          <ConfirmModal
            title="删除收藏视图"
            subDesc="此操作不可恢复"
            desc="确定要删除此视图吗？"
            onOk={this.deleteCollectionViewInfo}
            onCancel={this.handleCloseDelCollectionVisible}
          />
        )}

        <div className={styles.logo} key="logo">
          <div className={styles.viewTit}>
            <FormattedMessage id="sidecar.title" />
          </div>
        </div>
        <div className={styles.viewContent}>
          <div className={styles.tit}>
            <FormattedMessage id="sidecar.collection" />
            <Icon
              className={styles.addCollection}
              component={addSvg}
              onClick={this.handleOpenCollectionVisible}
            />
          </div>
          {collectionList.map(item => {
            return (
              <Link key={item.url} to={item.url}>
                <div className={styles.con}>
                  {item.name}
                  <Icon
                    className={styles.addCollection}
                    component={delSvg}
                    onClick={() => {
                      this.handleOpenDelCollectionVisible(item);
                    }}
                  />
                </div>
              </Link>
            );
          })}

          <div className={styles.tit}>企业</div>
          {enterpriseList.map(item => {
            return (
              <Link
                key={item.enterprise_id}
                to={`/enterprise/${item.enterprise_id}/index`}
              >
                <div className={styles.con}>{item.enterprise_alias}</div>
              </Link>
            );
          })}

          <div className={styles.tit}>
            团队
            <Icon type="search" onClick={this.handleIsShowSearch} />
          </div>
          {isSearch && (
            <Search
              placeholder="搜索团队名称"
              onSearch={this.handleOnSearchTeam}
              className={styles.searchTeam}
            />
          )}
          {userTeam &&
            userTeam.map(item => {
              const currRegion = 'no-region';
              const { region, team_name, team_alias } = item;
              return (
                <Link
                  key={item.team_name}
                  to={`/team/${team_name}/region/${region
                    // region.length > 0 ? region[0].team_region_name : currRegion
                  }/index`}
                >
                  <div className={styles.con}>{team_alias}</div>
                </Link>
              );
            })}
        </div>
      </Sider>
    );
  }
}
