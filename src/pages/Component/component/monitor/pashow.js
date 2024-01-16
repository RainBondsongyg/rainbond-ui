import { ChartCard, Field } from "@/components/Charts";
import MiniArea from "@/components/Charts/MiniArea";
import MiniBar from "@/components/Charts/MiniBar";
import ScrollerX from "@/components/ScrollerX";
import globalUtil from "@/utils/global";
import monitorDataUtil from "@/utils/monitorDataUtil";
import regionUtil from "@/utils/region";
import teamUtil from "@/utils/team";
import userUtil from "@/utils/user";
import { Button, Card, Col, Icon, Row, Table, Tooltip } from "antd";
import { connect } from "dva";
import moment from "moment";
import numeral from "numeral";
import React, { Fragment, PureComponent } from "react";
import { formatMessage, FormattedMessage  } from 'umi-plugin-locale';

const ButtonGroup = Button.Group;

// eslint-disable-next-line react/no-multi-comp
@connect(({ user, appControl }) => ({
  currUser: user.currentUser,
  appDetail: appControl.appDetail,
  onlineNumber: appControl.onlineNumber,
  onlineNumberRange: appControl.onlineNumberRange,
  appRequest: appControl.appRequest,
  appRequestRange: appControl.appRequestRange,
  requestTime: appControl.requestTime,
  requestTimeRange: appControl.requestTimeRange
}))
export default class MonitorNow extends PureComponent {
  constructor(props) {
    super(props);
    this.inerval = 5000;
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchRequestTime();
    this.fetchRequestTimeRange();
    this.fetchRequest();
    this.fetchRequestRange();
    this.fetchOnlineNumber();
    this.fetchOnlineNumberRange();
    this.createSocket();
  }
  componentWillUnmount() {
    this.mounted = false;
    this.props.dispatch({ type: "appControl/clearOnlineNumberRange" });
    this.props.dispatch({ type: "appControl/clearRequestTime" });
    this.props.dispatch({ type: "appControl/clearRequestTimeRange" });
    this.props.dispatch({ type: "appControl/clearRequest" });
    this.props.dispatch({ type: "appControl/clearRequestRange" });
    this.props.dispatch({ type: "appControl/clearOnlineNumber" });
    const { socket } = this.props;
    if (socket) {
      socket.closeMonitorMessage();
    }
  }
  // eslint-disable-next-line class-methods-use-this
  getStartTime() {
    return new Date().getTime() / 1000 - 60 * 60;
  }
  // eslint-disable-next-line class-methods-use-this
  getStep() {
    return 60;
  }
  getSocketUrl = () => {
    const currTeam = userUtil.getTeamByTeamName(
      this.props.currUser,
      globalUtil.getCurrTeamName()
    );
    const currRegionName = globalUtil.getCurrRegionName();

    if (currTeam) {
      const region = teamUtil.getRegionByName(currTeam, currRegionName);

      if (region) {
        return regionUtil.getMonitorWebSocketUrl(region);
      }
    }
    return "";
  };
  fetchRequestTime() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchRequestTime",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        serviceId: this.props.appDetail.service.service_id
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchRequestTime();
          }, this.inerval);
        }
      }
    });
  }
  fetchRequestTimeRange() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchRequestTimeRange",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        start: this.getStartTime(),
        serviceId: this.props.appDetail.service.service_id,
        step: this.getStep()
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchRequestTimeRange();
          }, this.inerval);
        }
      }
    });
  }
  fetchRequest() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchRequest",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        serviceId: this.props.appDetail.service.service_id
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchRequest();
          }, this.inerval);
        }
      }
    });
  }
  fetchRequestRange() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchRequestRange",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        start: this.getStartTime(),
        serviceId: this.props.appDetail.service.service_id,
        step: this.getStep()
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchRequestRange();
          }, this.inerval);
        }
      }
    });
  }
  fetchOnlineNumber() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchOnlineNumber",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        serviceId: this.props.appDetail.service.service_id
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchOnlineNumber();
          }, this.inerval);
        }
      }
    });
  }
  fetchOnlineNumberRange() {
    if (!this.mounted) return;
    this.props.dispatch({
      type: "appControl/fetchOnlineNumberRange",
      payload: {
        team_name: globalUtil.getCurrTeamName(),
        app_alias: this.props.appAlias,
        start: this.getStartTime(),
        serviceId: this.props.appDetail.service.service_id,
        step: this.getStep()
      },
      complete: () => {
        if (this.mounted) {
          setTimeout(() => {
            this.fetchOnlineNumberRange();
          }, this.inerval);
        }
      }
    });
  }
  createSocket() {
    const { socket } = this.props;
    if (socket) {
      socket.setOnMonitorMessage(messages => {
        this.updateTable(messages);
      });
    }
  }
  updateTable(event) {
    try {
      event = JSON.parse(event);
    } catch (e) {}
    this.setState({ logs: event });
  }
  render() {
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 8,
      style: {
        marginBottom: 24
      }
    };
    const arr = [
      [
        1705309409.303,
        "1"
      ],
      [
        1705309469.303,
        "1"
      ],
      [
        1705309529.303,
        "1"
      ],
      [
        1705309589.303,
        "1"
      ],
      [
        1705309649.303,
        "1"
      ],
      [
        1705309709.303,
        "1"
      ],
      [
        1705309769.303,
        "1"
      ],
      [
        1705309829.303,
        "1"
      ],
      [
        1705309889.303,
        "1"
      ],
      [
        1705309949.303,
        "1"
      ],
      [
        1705310009.303,
        "1"
      ],
      [
        1705310069.303,
        "1"
      ],
      [
        1705310129.303,
        "1"
      ],
      [
        1705310189.303,
        "1"
      ],
      [
        1705310249.303,
        "1"
      ],
      [
        1705310309.303,
        "1"
      ],
      [
        1705310369.303,
        "6"
      ],
      [
        1705310429.303,
        "1"
      ],
      [
        1705310489.303,
        "1"
      ],
      [
        1705310549.303,
        "7"
      ],
      [
        1705310609.303,
        "1"
      ],
      [
        1705310669.303,
        "1"
      ],
      [
        1705310729.303,
        "12"
      ],
      [
        1705310789.303,
        "1"
      ],
      [
        1705310849.303,
        "8"
      ],
      [
        1705310909.303,
        "1"
      ],
      [
        1705310969.303,
        "1"
      ],
      [
        1705311029.303,
        "1"
      ],
      [
        1705311089.303,
        "9"
      ],
      [
        1705311149.303,
        "1"
      ],
      [
        1705311209.303,
        "1"
      ],
      [
        1705311269.303,
        "1"
      ],
      [
        1705311329.303,
        "1"
      ],
      [
        1705311389.303,
        "1"
      ],
      [
        1705311449.303,
        "1"
      ],
      [
        1705311509.303,
        "1"
      ],
      [
        1705311569.303,
        "1"
      ],
      [
        1705311629.303,
        "1"
      ],
      [
        1705311689.303,
        "1"
      ],
      [
        1705311749.303,
        "1"
      ],
      [
        1705311809.303,
        "1"
      ],
      [
        1705311869.303,
        "1"
      ],
      [
        1705311929.303,
        "1"
      ],
      [
        1705311989.303,
        "1"
      ],
      [
        1705312049.303,
        "1"
      ],
      [
        1705312109.303,
        "1"
      ],
      [
        1705312169.303,
        "1"
      ],
      [
        1705312229.303,
        "1"
      ],
      [
        1705312289.303,
        "1"
      ],
      [
        1705312349.303,
        "1"
      ],
      [
        1705312409.303,
        "1"
      ],
      [
        1705312469.303,
        "1"
      ],
      [
        1705312529.303,
        "14"
      ],
      [
        1705312589.303,
        "1"
      ],
      [
        1705312649.303,
        "1"
      ],
      [
        1705312709.303,
        "1"
      ],
      [
        1705312769.303,
        "1"
      ],
      [
        1705312829.303,
        "1"
      ],
      [
        1705312889.303,
        "1"
      ],
      [
        1705312949.303,
        "1"
      ],
      [
        1705313009.303,
        "1"
      ]
    ]
    let res = []
    res = arr.map((item)=>({
      x: moment(new Date(item[0] * 1000)).locale("zh-cn").format("HH:mm:ss"),
      y: Number(item[1]),
      y1: Number(item[1]),
      y2: Number(item[1])
    }))
    return (
      <Fragment>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              title={<FormattedMessage id="componentOverview.body.tab.monitor.now.time"/>}
              action={
                <Tooltip 
                title={<FormattedMessage id="componentOverview.body.tab.monitor.now.averageTime"/>}
                >
                  {" "}
                  <Icon type="info-circle-o" />{" "}
                </Tooltip>
              }
              total={numeral(
                monitorDataUtil.queryTog2(this.props.requestTime)
              ).format("0,0")}
              footer={<Field label="" value="" />}
              contentHeight={46}
            >
              {/* <MiniArea
                color="#975FE4"
                // data={monitorDataUtil.queryRangeTog2(
                //   this.props.requestTimeRange
                // )}
                data={res}
              /> */}
              <MiniArea 
                keys='ms' 
                chartColor='#975FE4' 
                data={res}
                // data={monitorDataUtil.queryRangeTog2(
                //   this.props.requestTimeRange
                // )}
              />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              // bordered={false}
              // title="吞吐率（dps）"
              title={<FormattedMessage id="componentOverview.body.tab.monitor.now.throughput"/>}
              action={
                <Tooltip 
                // title="过去一分钟平均每5s的请求次数"
                title={<FormattedMessage id="componentOverview.body.tab.monitor.now.NumberOfRequests"/>}
                >
                  {" "}
                  <Icon type="info-circle-o" />{" "}
                </Tooltip>
              }
              total={numeral(
                monitorDataUtil.queryTog2(this.props.appRequest)
              ).format("0,0")}
              footer={<Field label="" value="" />}
              contentHeight={46}
            >
              {/* <MiniArea
                color="#4593fc"
                // data={monitorDataUtil.queryRangeTog2(
                //   this.props.appRequestRange
                // )}
                data={res}
              /> */}
              <MiniArea 
                keys='dps' 
                chartColor='#4593fc' 
                data={res}
                // data={monitorDataUtil.queryRangeTog2(
                //   this.props.requestTimeRange
                // )}
              />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              // bordered={false}
              // title="在线人数"
              title={<FormattedMessage id="componentOverview.body.tab.monitor.now.onlineNumber"/>}
              action={
                <Tooltip 
                // title="过去5分钟的独立IP数量"
                title={<FormattedMessage id="componentOverview.body.tab.monitor.now.independent"/>}
                >
                  {" "}
                  <Icon type="info-circle-o" />{" "}
                </Tooltip>
              }
              total={numeral(
                monitorDataUtil.queryTog2(this.props.onlineNumber)
              ).format("0,0")}
              footer={<Field label="" value="" />}
              contentHeight={46}
            >
              {/* <MiniBar
                // data={monitorDataUtil.queryRangeTog2(
                //   this.props.onlineNumberRange
                // )}
                data={res}
              /> */}
              <MiniBar 
                keys='num' 
                chartColor='#4593fc' 
                data={res} 
              />
            </ChartCard>
          </Col>
        </Row>
        <Card 
        // title="过去5分钟耗时最多的URL排行"
        title={<FormattedMessage id="componentOverview.body.tab.monitor.now.ranking"/>}
        >
          <ScrollerX sm={700}>
            <Table
              rowKey={(record,index) => index}
              columns={[
                {
                  title: "Url",
                  dataIndex: "Key"
                },
                {
                  // title: "累计时间(ms)",
                  title: formatMessage({id:'componentOverview.body.tab.monitor.now.cumulativeTime'}),
                  dataIndex: "CumulativeTime",
                  width: 150
                },
                {
                  // title: "平均时间(ms)",
                  title: formatMessage({id:'componentOverview.body.tab.monitor.now.AverageTime'}),
                  dataIndex: "AverageTime",
                  width: 150
                },
                {
                  // title: "请求次数",
                  title: formatMessage({id:'componentOverview.body.tab.monitor.now.requests'}),
                  dataIndex: "Count",
                  width: 100
                },
                {
                  // title: "异常次数",
                  title: formatMessage({id:'componentOverview.body.tab.monitor.now.abnormalTimes'}),
                  dataIndex: "AbnormalCount",
                  width: 100
                }
              ]}
              pagination={false}
              dataSource={this.state.logs}
            />
          </ScrollerX>
        </Card>
      </Fragment>
    );
  }
}
