/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
  Input,
  Form,
  Select,
  DatePicker,
  Col,
  Row,
  Button,
  Table,
  Pagination,
  Tooltip
} from 'antd';
import moment from 'moment';
import styles from '../index.less';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

@Form.create()
@connect(({ user, list, loading, global, index }) => ({
  user: user.currentUser,
  list,
  loading: loading.models.list,
  rainbondInfo: global.rainbondInfo,
  enterprise: global.enterprise,
  isRegist: global.isRegist,
  overviewInfo: index.overviewInfo
}))
export default class LoginLog extends PureComponent {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      username: '',
      page: 1,
      page_size: 999,
      loading: true,
      logList: [],
      logsPage: 1,
      logsPageSize: 10,
      logsTotal: 1,
      adminList: [],
      startTime: '',
      endTime: ''
    };
  }

  componentDidMount() {
    this.loadUser();
    this.loadLoginLog();
  }

  handleSearch = (name) => {
    this.setState(
      {
        name,
        page: 1
      },
      () => {
        this.loadUser();
      }
    );
  };
  handleChange = (value) => {
    this.setState(
      {
        username: value,
        logsPage: 1
      },
      () => {
        this.loadLoginLog();
      }
    );
  };
  loadLoginLog = () => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    const { logsPage, logsPageSize, username, startTime, endTime } = this.state;

    dispatch({
      type: 'global/fetchLoginLogs',
      payload: {
        enterprise_id: eid,
        page: logsPage,
        page_size: logsPageSize,
        username,
        start_time: startTime,
        end_time: endTime
      },
      callback: (res) => {
        if (res && res._code === 200) {
          this.setState({
            loading: false,
            logList: res.list,
            logsTotal: res.total || 1
          });
        }
      }
    });
  };

  loadUser = () => {
    const {
      dispatch,
      match: {
        params: { eid }
      }
    } = this.props;
    const { page, page_size, name } = this.state;
    dispatch({
      type: 'global/fetchEnterpriseUsers',
      payload: {
        enterprise_id: eid,
        page,
        page_size,
        name
      },
      callback: (res) => {
        if (res) {
          this.setState({ adminList: res.list });
        }
      }
    });
  };

  disabledDate = (current) => {
    return (
      current &&
      (moment(new Date()).subtract(1, 'years') > current ||
        current > moment().endOf('day'))
    );
  };
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  onPageChange = (logsPage) => {
    this.setState({ logsPage, loading: true }, () => {
      this.loadLoginLog();
    });
  };
  onShowSizeChange = (logsPage, logsPageSize) => {
    this.setState(
      {
        logsPage,
        logsPageSize,
        loading: true
      },
      () => {
        this.loadLoginLog();
      }
    );
  };

  handleSubmit = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        let startTime = '';
        let endTime = '';

        if (values.times && values.times.length > 1) {
          startTime = moment(values.times[0])
            .locale('zh-cn')
            .format('YYYY-MM-DD HH:mm:ss');
          endTime = moment(values.times[1])
            .locale('zh-cn')
            .format('YYYY-MM-DD HH:mm:ss');
        }
        const username = values.user_name || '';
        this.setState(
          {
            loading: true,
            logsPage: 1,
            startTime,
            endTime,
            username
          },
          () => {
            this.loadLoginLog();
          }
        );
      }
    });
  };
  handleChangeTimes = (values) => {
    let startTime = '';
    let endTime = '';

    if (values && values.length > 1) {
      startTime = moment(values[0])
        .locale('zh-cn')
        .format('YYYY-MM-DD HH:mm:ss');
      endTime = moment(values[1]).locale('zh-cn').format('YYYY-MM-DD HH:mm:ss');
    }

    this.setState(
      {
        loading: true,
        logsPage: 1,
        startTime,
        endTime
      },
      () => {
        this.loadLoginLog();
      }
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      loading,
      adminList,
      logList,
      logsPage,
      logsPageSize,
      logsTotal
    } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 0
        },
        sm: {
          span: 0
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 24
        }
      }
    };
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" align="middle">
            <FormItem {...formItemLayout}>
              {getFieldDecorator('user_name', {
                rules: [
                  {
                    required: false,
                    message: '请选择用户'
                  }
                ]
              })(
                <Select
                  showSearch
                  placeholder="请选择用户"
                  style={{ width: '178px', marginRight: '20px' }}
                  defaultActiveFirstOption={false}
                  filterOption={false}
                  notFoundContent={null}
                  onSearch={this.handleSearch}
                  onChange={this.handleChange}
                >
                  <Option key={0} value="">
                    所有用户
                  </Option>
                  {adminList &&
                    adminList.length > 0 &&
                    adminList.map((item) => {
                      const { nick_name, real_name, user_id } = item;
                      return (
                        <Option key={user_id} value={nick_name}>
                          {real_name}
                        </Option>
                      );
                    })}
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('times', {
                initialValue: ''
              })(
                <RangePicker
                  locale={locale}
                  separator="至"
                  style={{ width: '400px', marginRight: '20px' }}
                  disabledDate={this.disabledDate}
                  onChange={(value) => {
                    this.handleChangeTimes(value);
                  }}
                  showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [
                      moment('00:00:00', 'HH:mm:ss'),
                      moment('23:59:59', 'HH:mm:ss')
                    ]
                  }}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )}
            </FormItem>
            <Button
              onClick={this.handleSubmit}
              type="primary"
              htmlType="submit"
              style={{ marginBottom: '24px' }}
            >
              查询
            </Button>
          </Row>
        </Form>
        <Table
          loading={loading}
          size="middle"
          className={styles.tables}
          pagination={false}
          dataSource={logList || []}
          columns={[
            {
              title: '用户',
              align: 'center',
              dataIndex: 'real_name',
              width: 130,
              render: (val, data) => {
                return (
                  <Tooltip
                    placement="top"
                    title={
                      <div>
                        <div>账户：{data.username}</div>
                        <div>邮箱：{data.email}</div>
                      </div>
                    }
                  >
                    {val}
                  </Tooltip>
                );
              }
            },

            {
              title: '客户端 IP',
              align: 'center',
              width: 130,
              dataIndex: 'client_ip',
              render: (val) => {
                return <div>{val || '-'}</div>;
              }
            },
            {
              title: '登录时间',
              dataIndex: 'login_time',
              rowKey: 'login_time',
              align: 'center',
              width: 180,
              render: (val) => {
                return (
                  <span>
                    {moment(val).locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')}
                  </span>
                );
              }
            },
            {
              title: '登录设备',
              dataIndex: 'user_agent',
              render: (val) => {
                return <div>{val || '-'}</div>;
              }
            },
            {
              title: '活跃时长',
              dataIndex: 'duration',
              rowKey: 'duration',
              align: 'center',
              width: 140,
              render: (val) => {
                if (!val) {
                  return '-';
                }
                const durations = moment.duration(val, 'seconds');
                const hours = Math.floor(durations.asHours());
                const mins = Math.floor(durations.asMinutes()) - hours * 60;
                const seconds = val - hours * 60 * 60 - mins * 60;
                return (
                  <span>
                    {hours ? `${hours}小时` : ''}
                    {mins ? `${mins}分钟` : ''}
                    {seconds ? `${seconds}秒` : ''}
                  </span>
                );
              }
            }
          ]}
        />
        <Pagination
          style={{ margin: '20px 0', float: 'right' }}
          size="default"
          current={logsPage}
          pageSize={logsPageSize}
          showSizeChanger
          total={Number(logsTotal)}
          defaultCurrent={1}
          onChange={this.onPageChange}
          pageSizeOptions={['5', '10', '20', '50']}
          onShowSizeChange={this.onShowSizeChange}
        />
      </Fragment>
    );
  }
}