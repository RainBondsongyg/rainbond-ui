/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Button, Card, Form, Input, Row, Steps, Select, Collapse, Icon, Affix, Table, Col, Radio, Switch } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React, { PureComponent } from 'react';
import router from 'umi/router';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import DAinput from '../../../components/DAinput';
import DApvcinput from '../../../components/DApvcinput.js/index.js';
import DAselect from '../../../components/DAseclect';
import EnvironmentVariable from "../../../components/EnvironmentVariable"
import Port from "../../../components/Port"
import appProbeUtil from '../../../utils/appProbe-util';
import userUtil from '../../../utils/user';
import styles from './indexs.less';
const { Panel } = Collapse;
const { Option, OptGroup } = Select;
const FormItem = Form.Item;
@Form.create()
@connect(({ user, list, loading, global, index, region }) => ({
    user: user.currentUser,
    list,
    loading: loading.models.list,
    rainbondInfo: global.rainbondInfo,
    enterprise: global.enterprise,
    isRegist: global.isRegist,
    oauthLongin: loading.effects['global/creatOauth'],
    overviewInfo: index.overviewInfo,
    baseConfiguration: region.base_configuration
}))
export default class ImportMessage extends PureComponent {
    constructor(props) {
        super(props);
        const { user } = this.props;
        const adminer = userUtil.isCompanyAdmin(user);
        this.state = {
            adminer,
            text: '这是折叠面板',
            nameSpaceArr: [],
            app: ["app1", "app2", "app3"],
            type: 'app1',
            editStartHealth: null,
            showSwitch: false,
            value: '',
            modulecut:0,
            appDetail: {
                event_websocket_url: "ws://47.104.161.96:6060/event_log",
                is_third: false,
                service: {
                    ID: 3,
                    build_upgrade: true,
                    category: "app_publish",
                    check_event_id: "66e2facffda04f479bdffd4a24461191",
                    check_uuid: "d7495f1d-b861-48bb-a08e-62206ce7c58b",
                    cmd: "",
                    code_from: "image_manual",
                    code_version: null,
                    container_gpu: 0,
                    create_status: "checked",
                    create_time: "2022-06-27 16:22:23",
                    creater: 1,
                    deploy_version: "",
                    desc: "docker run application",
                    docker_cmd: "nginx:1.11",
                    env: ",",
                    expired_time: null,
                    extend_method: "stateless_multiple",
                    git_full_name: null,
                    git_project_id: 0,
                    git_url: null,
                    group_id: 1,
                    group_name: "默认应用",
                    host_path: "/grdata/tenant/11b7480ac2054d89bd4ad6852de6d8e6/service/4bc1a895f55a2e24178bfe9e90a718dd",
                    image: "nginx:1.11",
                    inner_port: 0,
                    is_code_upload: false,
                    is_service: false,
                    is_upgrate: false,
                    is_web_service: false,
                    k8s_component_name: "nginx",
                    language: "",
                    min_cpu: 0,
                    min_memory: 512,
                    min_node: 1,
                    namespace: "11b7480ac2054d89bd4ad6852de6d8e6",
                    oauth_service_id: null,
                    open_webhooks: false,
                    port_type: "multi_outer",
                    protocol: "",
                    secret: null,
                    server_type: "git",
                    service_alias: "gr25a5c4",
                }
            }
        };
    }
    //折叠面板图标
    genExtra = () => (
        <Icon
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );
    //折叠面板收起方法
    callback = (key) => {
        // console.log(key, 'key')
    }
    handleType = (item, index) => {
        if(item){
            let anchorElement = document.getElementById(item)
            if(anchorElement) {anchorElement.scrollIntoView({block:"start",behavior:"smooth"})}
        }
        
        this.setState({
            type: item
        });
    }
    //组件切换按钮函数 
    hander = (index,e) => {
        e.stopPropagation()
        this.setState({
            modulecut:index
        })
    }
    // 健康检测函数
    handleStartProbeStart = isUsed => {
        const { startProbe } = this.props;
        this.props.dispatch({
            type: 'appControl/editStartProbe',
            payload: {
                team_name: globalUtil.getCurrTeamName(),
                app_alias: this.props.appAlias,
                ...startProbe,
                is_used: isUsed
            },
            callback: res => {
                if (res && res.status_code) {
                    if (res.status_code === 200) {
                        this.fetchStartProbe();
                        if (isUsed) {
                            notification.success({ message: '启用成功,请更新组件后生效' });
                        } else {
                            notification.success({ message: '禁用成功,请更新组件后生效' });
                        }
                    }
                }
            }
        });
    };
    handleRunProbeStart = isUsed => {
        const { runningProbe } = this.props;
        this.props.dispatch({
            type: 'appControl/editRunProbe',
            payload: {
                team_name: globalUtil.getCurrTeamName(),
                app_alias: this.props.appAlias,
                ...runningProbe,
                is_used: isUsed
            },
            callback: () => {
                this.fetchRunningProbe();
            }
        });
    };
    handleState = data => {
        if (appProbeUtil.isStartProbeUsed(data)) {
            if (appProbeUtil.isStartProbeStart(data)) {
                return '已启用';
            }
            return '已禁用';
        }
        return '未设置';
    };
    // 部署属性函数
    onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }
    showSwitch = () => {
        console.log(111);
        const value = this.state.showSwitch
        this.setState({
            showSwitch: !value
        })
    }
    inputValue = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    componentDidMount() {

    }
    // 特殊属性
    handleSwitchOnChange = () => { };
    render() {
        const zujian = ["组件一", "组件二", "组件三"];
        const { type } = this.state;
        // 端口检测数据
        const ports = [
            {
                ID: 7,
                bind_domains: [],
                bind_tcp_domains: [],
                container_port: 80,
                environment: [],
                inner_url: "",
                is_inner_service: false,
                is_outer_service: false,
                k8s_service_name: "gr1b311a-80",
                lb_mapping_port: 0,
                mapping_port: 80,
                outer_url: "",
                port_alias: "GR1B311A80",
                protocol: "http",
                service_id: "b5dd406bed4d7b4374aa8bbf3f1b311a",
                tenant_id: "11b7480ac2054d89bd4ad6852de6d8e6",
            },
            {
                ID: 6,
                bind_domains: [],
                bind_tcp_domains: [],
                container_port: 443,
                environment: [],
                inner_url: "",
                is_inner_service: false,
                is_outer_service: false,
                k8s_service_name: "gr1b311a-443",
                lb_mapping_port: 0,
                mapping_port: 443,
                outer_url: "",
                port_alias: "GR1B311A443",
                protocol: "https",
                service_id: "b5dd406bed4d7b4374aa8bbf3f1b311a",
                tenant_id: "11b7480ac2054d89bd4ad6852de6d8e6",
            }
        ];
        // 环境检测数据
        const appDetail = "gra718dd"
        
        // 健康检测数据
        const startProbe = {
            ID: 1,
            cmd: "",
            failure_threshold: 3,
            http_header: "",
            initial_delay_second: 2,
            is_used: true,
            mode: "readiness",
            path: "",
            period_second: 3,
            port: 80,
            probe_id: "2406c2e9a97948458f4bff8f8aebbae3",
            scheme: "tcp",
            service_id: "4bc1a895f55a2e24178bfe9e90a718dd",
            success_threshold: 1,
            timeout_second: 20,
        }
        // 自动伸缩数据
        const columns = [
            {
                title: '最小实例',
                dataIndex: 'minexample',
                key: 'minexample',
                align: 'center'
                //   render
            },
            {
                title: '最大实例',
                dataIndex: 'minexample',
                key: 'maxexample',
                align: 'center'
            },
            {
                title: 'CPU使用',
                dataIndex: 'cupuse',
                key: 'cupuse',
                align: 'center'
            },
            {
                title: '内存使用',
                dataIndex: 'ramuse',
                key: 'ramuse',
                align: 'center'
            },
        ];
        const data = [
            {
                key: '1',
                minexample: 1,
                minexample: 3,
                cupuse: 50,
                ramuse: 7,
            },
        ];
        //   部署属性数据
        const deploydata = {
            type: "Deployment",
            number: 2,
            ramnum:
                [
                    { value: "a", msg: "不限制" },
                    { value: "b", msg: "64M" },
                    { value: "c", msg: "128M" },
                    { value: "d", msg: "512M" },
                    { value: "e", msg: "1G" },
                    { value: "f", msg: "2G" },
                    { value: "g", msg: "4G" },
                    { value: "h", msg: "8G" },
                    { value: "i", msg: "16G" },
                ]
        }
        // 特殊属性值
        const {
            form: { getFieldDecorator }
        } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 4
                },
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                xs: {
                    span: 6
                },
                sm: {
                    span: 6
                }
            }
        };
        const formItemLayouts = {
            labelCol: {
                xs: {
                    span: 4
                },
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                xs: {
                    span: 14
                },
                sm: {
                    span: 14
                }
            }
        };
        return (
            <PageHeaderLayout
                content=""
            >
                <div>
                    <h2>团队名称</h2>
                    <h3 className={styles.applist}>应用列表：</h3>
                    <div className={styles.typeBtnWrap}>
                        <Affix offsetTop={0}>
                            <div className={styles.fixed}>
                                {
                                    this.state.app.map((item, index) => {
                                        return <span key={index}
                                            className={`${styles.typeBtn}  ${type === item ? styles.active : ""}`}
                                            onClick={() => {
                                                this.handleType(item, index);
                                            }}
                                        >
                                            {item}
                                            <Icon type="right" />
                                        </span>
                                    })
                                }
                            </div>
                        </Affix>
                    </div>
                    <div id='box'>
    {/* APP1 */}
                        <div className={styles.alltable} id="app1">
                            <Collapse
                                expandIconPosition='right'
                                defaultActiveKey={['1']}
                                bordered={false}
                            >
                                <Panel
                                    header={
                                        <div>
                                            {zujian.map((item, index) => {
                                                return <button key={index} className={this.state.modulecut ===index ? styles.checkoutbutton : styles.zujianbutton} onClick={(e)=> this.hander(index,e)}>{item}</button>
                                            })}
                                        </div>
                                    }
                                    key="1">
                                    {/* 部署属性 */}
                                    <Card
                                        title="部署属性"
                                        className={styles.cardstyle}
                                        style={{
                                            marginBottom: 16,
                                        }}>
                                        <Row>
                                            <h3>组件类型：<span>{deploydata.type}</span></h3>
                                        </Row>
                                        <Row>
                                            <h3 className={styles.deploydatanum}>实例数：<span>{deploydata.number}</span></h3>
                                        </Row>
                                        <Row >
                                            <div className={styles.ramstyle}>
                                                <h3 >内存：
                                                    <Radio.Group onChange={this.onChange} defaultValue="d">
                                                        {
                                                            deploydata.ramnum.map((item, index) => {
                                                                return <Radio.Button key={index} value={item.value}>{item.msg}</Radio.Button>
                                                            })
                                                        }
                                                    </Radio.Group>
                                                </h3>
                                                <p onClick={this.showSwitch}>其他</p>
                                                {this.state.showSwitch ? (<div style={{ marginBottom: 16 }}>
                                                    <Input
                                                        addonAfter={"m"}
                                                        placeholder={"请输入"}
                                                        onChange={this.inputValue}
                                                        value={this.state.value}
                                                    />
                                                </div>) : ""}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className={styles.cpustyle}>
                                                <h3>CPU: </h3>
                                                <div style={{ marginBottom: 16 }}>
                                                    <Input
                                                        addonAfter={"m"}
                                                        placeholder={"请输入"}
                                                    />
                                                </div>
                                            </div>
                                        </Row>
                                    </Card>
                                    {/* 端口管理 */}
                                    <Card
                                        title="端口管理"
                                        style={{
                                            marginBottom: 16,
                                        }}>
                                        <div>
                                            {ports.map(port => {
                                                return (
                                                    <Port
                                                        key={port.ID}
                                                        port={port} />
                                                );
                                            })}
                                        </div>
                                    </Card>
                                    {/* 环境变量 */}
                                    <div>
                                        <EnvironmentVariable
                                            title="环境变量"
                                            type="Inner"
                                            appAlias={this.state.appDetail.service.service_alias}
                                        />
                                    </div>
                                    {/* 自动伸缩 */}
                                    <Card
                                        title="自动伸缩"
                                        style={{
                                            marginBottom: 16,
                                        }}>
                                        <Table
                                            columns={columns}
                                            dataSource={data}
                                            pagination={false}
                                        />
                                    </Card>
                                    {/* 健康监测 */}
                                    <Card
                                        style={{
                                            marginBottom: 24
                                        }}
                                        title={
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                健康检测
                                                {startProbe && (
                                                    <div>
                                                        <a
                                                            onClick={() => {
                                                                this.setState({ editStartHealth: startProbe });
                                                            }}
                                                            style={{
                                                                marginRight: '5px',
                                                                fontSize: '14px',
                                                                fontWeight: 400
                                                            }}
                                                        >
                                                            {JSON.stringify(startProbe) != '{}' ? '编辑' : '设置'}
                                                        </a>

                                                        {JSON.stringify(startProbe) != '{}' &&
                                                            appProbeUtil.isStartProbeStart(startProbe) ? (
                                                            <a
                                                                onClick={() => {
                                                                    this.handleStartProbeStart(false);
                                                                }}
                                                                style={{ fontSize: '14px', fontWeight: 400 }}
                                                            >
                                                                禁用
                                                            </a>
                                                        ) : (
                                                            JSON.stringify(startProbe) != '{}' && (
                                                                <a
                                                                    onClick={() => {
                                                                        this.handleStartProbeStart(true);
                                                                    }}
                                                                    style={{ fontSize: '14px', fontWeight: 400 }}
                                                                >
                                                                    启用
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    >
                                        {startProbe && (
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: '33%', textAlign: 'center' }}>
                                                    当前状态:{this.handleState(startProbe)}
                                                </div>
                                                <div style={{ width: '33%', textAlign: 'center' }}>
                                                    检测方式:{startProbe.scheme ? startProbe.scheme : '未设置'}
                                                </div>
                                                <div style={{ width: '33%', textAlign: 'center' }}>
                                                    不健康处理方式:
                                                    {startProbe.mode === 'readiness'
                                                        ? '下线'
                                                        : startProbe.mode === 'liveness'
                                                            ? '重启'
                                                            : '未设置'}
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                    {/* 特殊属性 */}
                                    <Card title="特殊属性" style={{ marginBottom: '24px' }}>
                                        <Form>
                                            <FormItem label="NodeSelector" {...formItemLayout}>
                                                {getFieldDecorator('NodeSelector', {
                                                    rules: [{ required: false, message: '请输入NodeSelector' }]
                                                })(<DAinput />)}
                                            </FormItem>
                                            <FormItem label="label" {...formItemLayout}>
                                                {getFieldDecorator('label', {
                                                    rules: [{ required: false, message: '请输入label' }]
                                                })(<DAinput />)}
                                            </FormItem>
                                            <FormItem label="Tolerations" {...formItemLayouts}>
                                                {getFieldDecorator('Tolerations', {
                                                    rules: [{ required: false, message: '请输入label' }]
                                                })(<DAselect />)}
                                            </FormItem>
                                            <FormItem label="secret" {...formItemLayout}>
                                                {getFieldDecorator('secret', {
                                                    rules: [{ required: false, message: '请输入secret' }]
                                                })(<DAinput />)}
                                            </FormItem>
                                            <FormItem label="pvc" {...formItemLayouts}>
                                                {getFieldDecorator('Pvc', {
                                                    rules: [{ required: false, message: '请输入Pvc' }]
                                                })(<DApvcinput />)}
                                            </FormItem>
                                            <FormItem
                                                label="ServiceAccountName"
                                                labelCol={{
                                                    xs: {
                                                        span: 4
                                                    },
                                                    sm: {
                                                        span: 4
                                                    }
                                                }}
                                                wrapperCol={{
                                                    xs: {
                                                        span: 2
                                                    },
                                                    sm: {
                                                        span: 2
                                                    }
                                                }}
                                            >
                                                {getFieldDecorator('ServiceAccountName', {
                                                    rules: [{ required: false, message: '请输入ServiceAccountName' }]
                                                })(
                                                    <Select placeholder="请选择" style={{ width: 157 }}>
                                                        <Option value="male">Male</Option>
                                                        <Option value="female">Female</Option>
                                                        <Option value="other">Other</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                label="Privileged"
                                                labelCol={{
                                                    xs: {
                                                        span: 4
                                                    },
                                                    sm: {
                                                        span: 4
                                                    }
                                                }}
                                                wrapperCol={{
                                                    xs: {
                                                        span: 2
                                                    },
                                                    sm: {
                                                        span: 2
                                                    }
                                                }}
                                            >
                                                {getFieldDecorator('privileged', {
                                                    rules: [{}]
                                                })(
                                                    <Switch defaultChecked onChange={this.handleSwitchOnChange} />
                                                )}
                                            </FormItem>
                                        </Form>
                                    </Card>
                                </Panel>
                            </Collapse>
                        </div>
    {/* APP2 */}
                        <div className={styles.alltable} id="app2">
                        <Collapse
                                expandIconPosition='right'
                                defaultActiveKey={['1']}
                                bordered={false}
                            >
                                <Panel
                                    header={
                                        <div>
                                            {zujian.map((item, index) => {
                                                return <button key={index} className={this.state.modulecut ===index ? styles.checkoutbutton : styles.zujianbutton} onClick={(e)=> this.hander(index,e)}>{item}</button>
                                            })}
                                        </div>
                                    }
                                    key="1">
                                         <Card
                                        title="端口管理"
                                        style={{
                                            marginBottom: 16,
                                        }}>
                                        <div>
                                            {ports.map(port => {
                                                return (
                                                    <Port
                                                        key={port.ID}
                                                        port={port} />
                                                );
                                            })}
                                        </div>
                                    </Card>
                                        </Panel>
                            </Collapse>
                        </div>
    {/* APP3 */}
                        <div className={styles.alltable} id="app3">
                        <Collapse
                                expandIconPosition='right'
                                defaultActiveKey={['1']}
                                bordered={false}
                            >
                                <Panel
                                    header={
                                        <div>
                                            {zujian.map((item, index) => {
                                                return <button key={index} className={this.state.modulecut ===index ? styles.checkoutbutton : styles.zujianbutton} onClick={(e)=> this.hander(index,e)}>{item}</button>
                                            })}
                                        </div>
                                    }
                                    key="1">
                                         <Card
                                        title="端口管理"
                                        style={{
                                            marginBottom: 16,
                                        }}>
                                        <div>
                                            {ports.map(port => {
                                                return (
                                                    <Port
                                                        key={port.ID}
                                                        port={port} />
                                                );
                                            })}
                                        </div>
                                    </Card>
                                        </Panel>
                            </Collapse>
                            
                        </div>
                    </div>

                </div>
            </PageHeaderLayout>
        );
    }
}
