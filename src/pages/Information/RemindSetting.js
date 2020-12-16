import { Spin, Switch } from 'antd';
import { connect } from 'dva';
import React, { PureComponent } from 'react';
import styles from './index.less';

@connect(({ global, user }) => ({
  enterprise: global.enterprise,
  currentUser: user.currentUser
}))
export default class RemindSetting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true, list: [] };
  }
  componentDidMount() {
    this.loadSetRemind();
  }
  onChange = item => {
    this.setState(
      {
        loading: true
      },
      () => {
        this.putSetRemind(item);
      }
    );
  };

  loadSetRemind = () => {
    const { dispatch, currentUser } = this.props;
    dispatch({
      type: 'global/fetchSetRemind',
      payload: {
        enterprise_id: currentUser.enterprise_id,
        user_id: currentUser.user_id
      },
      callback: res => {
        if (res && res._code === 200) {
          this.setState({
            list: res.list,
            loading: false
          });
        }
      }
    });
  };

  putSetRemind = info => {
    const { dispatch, currentUser } = this.props;
    dispatch({
      type: 'global/putSetRemind',
      payload: {
        enterprise_id: currentUser.enterprise_id,
        user_id: currentUser.user_id,
        rule_id: info.ID,
        enable: !info.enable
      },
      callback: res => {
        if (res && res._code === 200) {
          this.loadSetRemind();
        }
      }
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <div className={styles.boxs}>
          <div className={styles.title}>提醒设置</div>
        </div>
        <div className={styles.customTitle}>
          <ul className={styles.customContent}>
            <li>消息类型</li>
            <li>系统提醒</li>
            <li>邮件提醒</li>
          </ul>
        </div>
        <Spin spinning={this.state.loading}>
          {list.map(item => {
            const { ID, msg_type: type, enable } = item;
            return (
              <div className={styles.customTitle} key={ID}>
                <ul className={styles.customContent}>
                  <li>{type}</li>
                  <li>
                    <Switch
                      className={styles.noAllowed}
                      disabled
                      defaultChecked
                      checked
                    />
                  </li>
                  <li>
                    <Switch
                      checked={enable}
                      onChange={() => {
                        this.onChange(item);
                      }}
                    />
                  </li>
                </ul>
              </div>
            );
          })}
        </Spin>
      </div>
    );
  }
}
