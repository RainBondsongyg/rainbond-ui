// 团队下的信息

//总览页面
const teamOverview = {
  'teamOverview.app.name': 'Apps',
  'teamOverview.appNum': 'Application number',
  'teamOverview.component.name': 'Components',
  'teamOverview.useResource': 'Use Resources',
  'teamOverview.UserNum': 'Number Users',
  'teamOverview.memoryUsage': 'Memory Usage',
  'teamOverview.diskUsage': 'Disk Usage',
  'teamOverview.runAppNum': 'Running Apps',
  'teamOverview.notRunAppNum': '{ number } Apps not running',
  'teamOverview.runAppNums': 'Running: { number }',
  'teamOverview.notRunAppNums': 'Not running: { number }',
  'teamOverview.appSum': 'Total { number } Apps',
  'teamOverview.componentSum': 'Total { number } Components',
  'teamOverview.runComponentNum': 'Running Components',
  'teamOverview.notRunComponentNum': '{ number } Components not running',
  'teamOverview.runStatusSort': 'Running status sort',
  'teamOverview.updateTimeSort': 'Update time sort',
  'teamOverview.sortTips':'Please select a sort method',
  'teamOverview.searchTips': 'Please enter the application name to search',
  'teamOverview.createApp': 'Create',
  'teamOverview.update': 'Update',
  'teamOverview.memory': 'Memory',
  'teamOverview.visit': 'Access',
  'teamOverview.appList': 'App list',
  'teamOverview.result.title':'The cluster end is not responding, Try again later.',
  'teamOverview.result.description':'If the loading fails, contact the cluster administrator to check the cluster status',
  'teamOverview.loadOverview':'Reload',
  'teamOverview.runAppNums': 'Running：{ number }',
  'teamOverview.notRunAppNums': 'Not running：{ number }',
  
}

//团队下的应用
const teamApply = {
  'teamApply.title':'Applications Manage',
  'teamApply.desc':'An application can be a project, an architecture, and a management unit of a business system, which consists of multiple components and application configurations.',
  'teamApply.searchTips':'search apps',
  'teamApply.search':'Search',
  'teamApply.createApp':'Create',
  'teamApply.appName':'App Name',
  'teamApply.updateTime':'Update Time',
  'teamApply.createTime':'Create Time',
  'teamApply.componentNumComparison':'Components (Running/Total)',
  'teamApply.memoryNumComparison':'Memory Used/Memory Allocated (MB)',
  'teamApply.duplicateRecord':'Backup records',
  'teamApply.releaseRecord':'Release records',
  'teamApply.remarks':'Remark',
}

//团队下的创建 code、image、upload、market、third
const teamAdd = {
  // 公共
  'teamAdd.create.form.appName':'App Name',
  'teamAdd.create.form.service_cname':'Component Name',
  'teamAdd.create.form.k8s_component_name':'English Name',
  'teamAdd.create.form.user':'Username',
  'teamAdd.create.form.password':'Password',
  'teamAdd.create.btn.create':'Create',
  'teamAdd.create.btn.createComponent':'New component',
  'teamAdd.create.error':'Parameter error',
  'teamAdd.create.createComponentTitle':'Create components',
  'teamAdd.create.fileList':'List Files',
  'teamAdd.create.null_data':'No Data',
  
  // code
  'teamAdd.create.code.title':'Create components from the source code',
  'teamAdd.create.code.desc':'Obtains the source code from the specified source repository and creates a new component based on the source information',
  'teamAdd.create.code.customSource':'Source code',
  'teamAdd.create.code.package':'Software package',
  'teamAdd.create.code.demo':'Example',
  'teamAdd.create.code.address':'Repo Address',
  'teamAdd.create.code.versions':'Code Version',
  'teamAdd.create.code.branch':'Branch',
  'teamAdd.create.code.fillInUser':'Account password',
  'teamAdd.create.code.fillInPath':'Subdirectory path',
  'teamAdd.create.code.path':'Subdirectory path',
  'teamAdd.create.code.demoBtn':'View Dmeo source code',
  'teamAdd.create.code.href':'View code',
  'teamAdd.create.code.demo2048':'2048 small game',
  'teamAdd.create.code.demoStatic':'Static Web：hello world !',
  'teamAdd.create.code.selectDemo':'Selection example',
  // image
  'teamAdd.create.image.title':'Create components from the Docker image',
  'teamAdd.create.image.desc':'Support for creating applications from a single image, Docker commands, and DockerCompose configuration',
  'teamAdd.create.image.tabImage':'DockerImage',
  'teamAdd.create.image.DockerRun':'Docker Run',
  'teamAdd.create.image.docker_cmd':'Command',
  'teamAdd.create.image.hint1':'This is a private repository? ',
  'teamAdd.create.image.hint2':'Account password',
  'teamAdd.create.image.mirrorAddress':'Image',
  'teamAdd.create.image.config':'DockerCompose configuration',
  'teamAdd.create.image.notice':'Tips',
  'teamAdd.create.image.configHint':'Note that parsing component related properties in the DockerCompose configuration is used to facilitate component creation, the dynamic variables in the DockerCompose configuration do not support parsing assignment, and a mirror of a private repository is used?',
  'teamAdd.create.helm.Add':'Add store',
  'teamAdd.create.helm.store':'Click to view the connected store',
  'teamAdd.create.helm.error':'The addition failed. Please check whether the command line statement is correct.',
  'teamAdd.create.helm.addstore':'Add helm Store',
  'teamAdd.create.helm.com_null':'The command line cannot be empty',
  'teamAdd.create.helm.input_com':'Please enter the command line',
  'teamAdd.create.helm.store_name':'Store name',
  'teamAdd.create.helm.store_url':'Shop address',
  'teamAdd.create.helm.list':'List of stores',
  'teamAdd.create.helm.comadd':'Command',
  //upload
  'teamAdd.create.upload.title':'Kubernetes YAML Helm',
  'teamAdd.create.upload.desc':'Supports creating components from Kubernetes YAML and importing existing Kubernetes resources',
  'teamAdd.create.upload.format':'Upload format',
  'teamAdd.create.upload.uploadFiles':'Upload file',
  'teamAdd.create.upload.uploadFiles.yaml':'Upload YAML File',
  'teamAdd.create.upload.uploadFiles.k8s':'Import Kubernetes Resources',
  'teamAdd.create.upload.uploadFiles.k8s.text':'Import Kubernetes',
  'teamAdd.create.upload.uploadFiles.helm':'Helm Command',
  'teamAdd.create.upload.uploadJWar':'You can upload files in Jar and War formats',
  'teamAdd.create.upload.uploadYaml':'Only YAML files can be uploaded',
  'teamAdd.create.upload.TeamWizard.helm':'Helm',
  'teamAdd.create.upload.TeamWizard.yaml':'Yaml',

  //market
  'teamAdd.create.market.desc':'Install apps with one click from local component libraries or app stores.',
  'teamAdd.create.market.market':'External application market (100+)',
  'teamAdd.create.market.command':'Command line installation',
  //third
  'teamAdd.create.third.title':'Adding Third Party Component',
  'teamAdd.create.third.desc':'Third-party components are components that run outside the platform cluster. Creating a component on a platform can connect it seamlessly to the platform gateway and be accessed by services on the platform. To meet the users through the platform can be unified monitoring and management of various components.',
  'teamAdd.create.third.componentRegister':'Registration Mode',
  'teamAdd.create.third.staticRegister':'Static registration',
  'teamAdd.create.third.apiRegister':'API registration',
  'teamAdd.create.third.componentAddress':'Component address',
  'teamAdd.create.third.href':'Click to read the document',
  'teamAdd.create.third.createNewApp':'Create',
  'teamAdd.create.third.Alert.warning':'The API address is obtained after the component is created',

}

//团队下的网关
const teamGateway = {

  // strategy
  'teamGateway.strategy.title':'Access Control',
  'teamGateway.strategy.manage':'Gateway management',
  'teamGateway.strategy.btn.add':'Add Policy',
  'teamGateway.strategy.placeholder.http':'Search for domain app component',
  'teamGateway.strategy.placeholder.tcp':'Search for ports app component',
  'teamGateway.strategy.btn.search':'Search',
  'teamGateway.strategy.table.domain':'Domain',
  'teamGateway.strategy.table.type':'Type',
  'teamGateway.strategy.table.end_point':'Port',
  'teamGateway.strategy.table.protocol':'Protocol',
  'teamGateway.strategy.table.is_senior':'Advanced routing',
  'teamGateway.strategy.table.certificate_alias':'Certificate',
  'teamGateway.strategy.table.group_name':'App',
  'teamGateway.strategy.table.service_cname':'Components (ports)',
  'teamGateway.strategy.table.operate':'Operation',
  'teamGateway.strategy.table.config':'Config',
  'teamGateway.strategy.table.edit':'Edit',
  'teamGateway.strategy.table.delete':'Delete',
  'teamGateway.strategy.table.type.default':'Default',
  'teamGateway.strategy.table.type.custom':'Custom',
  'teamGateway.strategy.table.type.tooltip':'You can perform this operation only after enabling external services',
  'teamGateway.strategy.table.type.tooltip.onclick':'Click Enable External Service to operate',
  'teamGateway.strategy.table.type.open':'Open',
  'teamGateway.strategy.table.type.joinMsg':'ConnectInfo',
  'teamGateway.strategy.table.type.null':'Empty',

  // certificate
  'teamGateway.certificate.title':'Certificate management',
  'teamGateway.certificate.desc':'TLS Certificate management: Supports server certificates and displays the certificate expiration time',
  'teamGateway.certificate.btn.add':'Add certificate',
  'teamGateway.certificate.table.name':'Name certificate',
  'teamGateway.certificate.table.address':'Address certificate',
  'teamGateway.certificate.table.time':'Expiration time',
  'teamGateway.certificate.table.type':'Certificate type',
  'teamGateway.certificate.table.source':'Certificate origin',
  'teamGateway.certificate.table.operate':'Operation',
  'teamGateway.certificate.table.edit':'Edit',
  'teamGateway.certificate.table.update':'Update',
  'teamGateway.certificate.table.delete':'Delete',

  // control
  'teamGateway.control.table.default':'Default',
  'teamGateway.control.table.GatewayApi':'Extension gateway',

  // HttpTable
  'teamGateway.HttpTable.title':'Are you sure you want to add?',
  'teamGateway.HttpTable.heards':'Request header',
  'teamGateway.HttpTable.weight':'Weight',
  'teamGateway.HttpTable.look':'View details',
  'teamGateway.HttpTable.undeployed':'The current component is in the undeployed state',
  'teamGateway.HttpTable.start':'Successful startup',
  'teamGateway.HttpTable.footer':'External access is not enabled for the component you selected. Do you want to automatically enable and add this access policy?',
  'teamGateway.HttpTable.appStatusVisable':'Friendly reminder',
  'teamGateway.HttpTable.text':'The current component is in the closed state and can be accessed after starting. Do you want to start the component?',

  // TcpTable
  'teamGateway.TcpTable.attr_value':'Variable value',
  'teamGateway.TcpTable.attr_name':'Variable name',
  'teamGateway.TcpTable.name':'Description',

  'teamGateway.TcpTable.title':'Are you sure you want to add?',
  'teamGateway.TcpTable.visibleModal':'Access information',
  'teamGateway.TcpTable.protocol.agreement':'Your current access protocol is',
  'teamGateway.TcpTable.protocol.address':'Recommended access address',
  'teamGateway.TcpTable.protocol.open':'Open MySQL client access',
  'teamGateway.TcpTable.copy':'Copy',
  // DrawerGateWayAPI
  'teamGateway.DrawerGateWayAPI.name':'name',
  'teamGateway.DrawerGateWayAPI.Gateway':'Gateway type',
  'teamGateway.DrawerGateWayAPI.backend':'Back-end parameter is mandatory.',
  'teamGateway.DrawerGateWayAPI.pathEmpty':'Please fill in the complete path parameters.',
  'teamGateway.DrawerGateWayAPI.headerEmpty':'Please complete headers parameters.',
  'teamGateway.DrawerGateWayAPI.allEmpty':'Please fill in the complete back-end parameters.',
  'teamGateway.DrawerGateWayAPI.Service':'When the type is Service, port is mandatory.',
  'teamGateway.DrawerGateWayAPI.RequestRedirect':'When the type is Request redirection, the domain name is mandatory',
  'teamGateway.DrawerGateWayAPI.add':'Add GatewayAPI',
  'teamGateway.DrawerGateWayAPI.edit':'Edit GatewayAPI',
  'teamGateway.DrawerGateWayAPI.type':'Gateway type',
  'teamGateway.DrawerGateWayAPI.appName':'Selective application',
  'teamGateway.DrawerGateWayAPI.hosts':'Domain name',
  'teamGateway.DrawerGateWayAPI.input_hosts':'Please enter the correct domain name',
  'teamGateway.DrawerGateWayAPI.rules':'Routing rule',
  'teamGateway.DrawerGateWayAPI.rules.message':'Please fill in at least the back-end options',

  'teamGateway.DrawerGateWayAPI.hostPlaceholder':'Please enter the domain name address',

  'teamGateway.DrawerGateWayAPI.RoutingRule.rule':'Rule set',
  'teamGateway.DrawerGateWayAPI.Rule.matching':'Condition matching',

  'teamGateway.DrawerGateWayAPI.BackEnd.title':'Back-end routing',
  'teamGateway.DrawerGateWayAPI.BackEnd.Internal':'Internal domain name',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_Internal':'Please enter the internal domain name',
  'teamGateway.DrawerGateWayAPI.BackEnd.type':'Type:',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_type':'Please select type',

  'teamGateway.DrawerGateWayAPI.BackEnd.namespance':'Namespace',
  'teamGateway.DrawerGateWayAPI.BackEnd.weight':'Weight',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_namespace':'Please enter the namespace',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_weight':'Please fill in the weight',
  'teamGateway.DrawerGateWayAPI.BackEnd.port':'Port',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_port':'Please enter the port number',

  'teamGateway.DrawerGateWayAPI.Redirection.Advanced_rule':'Advanced rule',
  'teamGateway.DrawerGateWayAPI.Redirection.type':'Type:',
  'teamGateway.DrawerGateWayAPI.Redirection.Cover':'Cover:',
  'teamGateway.DrawerGateWayAPI.Redirection.add':'Add:',
  'teamGateway.DrawerGateWayAPI.Redirection.del':'Delete:',
  'teamGateway.DrawerGateWayAPI.Redirection.Redirection':'Redirection configuration:',
  'teamGateway.DrawerGateWayAPI.Redirection.select':'Please select protocol',

  'teamGateway.DrawerGateWayAPI.Filtration.type':'Agreement:',
  'teamGateway.DrawerGateWayAPI.Filtration.select_type':'Please select protocol',

  'teamGateway.DrawerGateWayAPI.Filtration.hostname':'Domain name:',
  'teamGateway.DrawerGateWayAPI.Filtration.input_hostname':'Please fill in the Domain name',

  'teamGateway.DrawerGateWayAPI.Filtration.port':'Port:',
  'teamGateway.DrawerGateWayAPI.Filtration.input_port':'Please enter the port number',

  'teamGateway.DrawerGateWayAPI.Filtration.status_code':'Status code:',
  'teamGateway.DrawerGateWayAPI.Filtration.input_status_code':'Please enter the status code',

  'teamGateway.DrawerGateWayAPI.Filtration.Listening':'Listening item',
  'teamGateway.DrawerGateWayAPI.Filtration.select_Listening':'Select listener',
  'teamGateway.DrawerGateWayAPI.Filtration.all_Listening':'All monitoring',

  'teamGateway.license.noAuthority':'Please contact the enterprise administrator to modify the permission.',
  'teamGateway.license.delete':'Are you sure you want to delete it?',
  'teamGateway.license.later':'Add later',
  'teamGateway.license.now':'Go now',
  'teamGateway.license.go':'To configure the gateway certificate, go to',
  'teamGateway.license.path':'Console Management View -> Extensions -> Capabilities',
  'teamGateway.license.find':'Find the gateway implementation that you want to modify',
  'teamGateway.license.file':'yaml file',
  'teamGateway.license.in':'in',
  'teamGateway.license.add':'add the following fields to the property:',
  'teamGateway.license.copy':'Copy field',
  'teamGateway.license.pattern':"It must consist of lowercase letters, numbers, characters '-', or '.', and must start and end with a letter or number",
  'teamGateway.license.Precise': "Precise matching",
  'teamGateway.license.regular': "Regular matching",
  'teamGateway.license.prefix': "Prefix matching",
  'teamGateway.license.request': "Request redirection",
  'teamGateway.license.processing': "Processing request header",
}

const teamPlugin = {
  'teamPlugin.title':'Team Plugin',
  'teamPlugin.list':'Team Plugin',
  'teamPlugin.desc':'Application plugins are standardized to provide functional extensions for applications, Programs that work with the app',
  'teamPlugin.hint':'Install plugins from the App Market or new create plugins',
  'teamPlugin.btn.marketAdd':'Install plugins from the App Market',
  'teamPlugin.btn.add':'New create plugins',
  'teamPlugin.btn.delete':'Delete',
  'teamPlugin.btn.manage':'Manage',
  'teamPlugin.btn.install':'Install',
  'teamPlugin.install.title':'Install plugin',
  'teamPlugin.create.title':'Create plugin',
  'teamPlugin.create.lable.plugin_alias':'Plugin name',
  'teamPlugin.create.lable.build_source':'Install source',
  'teamPlugin.create.lable.category':'Plugin type',
  'teamPlugin.create.lable.image':'Image repo',
  'teamPlugin.create.lable.code_repo':'Source address',
  'teamPlugin.create.lable.username':'Repository Username',
  'teamPlugin.create.lable.password':'Repository Password',
  'teamPlugin.create.lable.code_version':'Branch',
  'teamPlugin.create.lable.min_cpu':'CPU',
  'teamPlugin.create.lable.build_cmd':'Command',
  'teamPlugin.create.lable.update_info':'Update Description',
  'teamPlugin.create.lable.desc':'Description',
  'teamPlugin.create.pages.key':'Config auth key',
  'teamPlugin.create.pages.btn':'Enter repository auth info',
  'teamPlugin.create.pages.image':'Image',
  'teamPlugin.create.pages.dockerfile':'Dockerfile',
  'teamPlugin.create.pages.entrance':'Entrance network',
  'teamPlugin.create.pages.exit':'Export network',
  'teamPlugin.create.pages.entrance_exit':'Entrance and export network',
  'teamPlugin.create.pages.performance':'Performance analysis',
  'teamPlugin.create.pages.initialize':'Initialization',
  'teamPlugin.create.pages.ordinary':'General',
  'teamPlugin.create.pages.monitor':'Monitor',
  'teamPlugin.create.pages.cpu':'CPU allocation 0 is unlimited. 1000m = 1core.',
    // 补充
    'teamPlugin.create.pages.null':'No spaces allowed',
    'teamPlugin.create.pages.input_add':'Enter the image address (name :tag) such as nginx:1.11',
    'teamPlugin.create.pages.input_git':'Enter source Git address (must include Dockerfile file)',
    'teamPlugin.create.pages.input':'Enter the code version',
}

const teamManage = {
  'teamManage.create.time':'Founded in',
  'teamManage.tabs.exitTeam':'Delete team',
  'teamManage.tabs.deleteTeam':'Quit team',
  'teamManage.tabs.setting':'Team set up',
  
  // 动态 dynamic
  'teamManage.tabs.dynamic':'Dynamic',
  'teamManage.tabs.dynamic.notDynamic':'No dynamic',
  'teamManage.tabs.dynamic.meta.app':' App ',
  'teamManage.tabs.dynamic.title.addTeam':'The following users apply to join the team',
  'teamManage.tabs.dynamic.modal.title':'User authorization',
  'teamManage.tabs.dynamic.table.user':'User',
  'teamManage.tabs.dynamic.form.lable':'Select role',
  'teamManage.tabs.dynamic.form.placeholder':'Please select roles',
  'teamManage.tabs.dynamic.table.time':'Apply time',
  'teamManage.tabs.dynamic.table.operate':'Operation',
  'teamManage.tabs.dynamic.table.btn.through':'Through',
  'teamManage.tabs.dynamic.table.btn.refuse':'Refused',
  'teamManage.tabs.dynamic.title.dynamic':'Dynamic',
  'teamManage.tabs.dynamic.table.name':'App Name',
  'teamManage.tabs.dynamic.table.operateTime':'Operating time',
  'teamManage.tabs.dynamic.table.operateContent':'Operating content',
  'teamManage.tabs.dynamic.table.operateDetail':'Operation details',
  'teamManage.tabs.dynamic.table.btn.checkDetail':'Check details',
  'teamManage.tabs.dynamic.table.btn.popconfirm':'Are you sure you want to reject the user?',

  //成员 member
  'teamManage.tabs.member':'Members',
  'teamManage.tabs.member.title':'Team members',
  'teamManage.tabs.member.btn.add':'Add members',
  'teamManage.tabs.member.table.userName':'Username',
  'teamManage.tabs.member.table.name':'Name',
  'teamManage.tabs.member.table.email':'Email',
  'teamManage.tabs.member.table.role':'Role',
  'teamManage.tabs.member.table.operate':'Operation',
  'teamManage.tabs.member.table.delete':'Delete',
  'teamManage.tabs.member.table.editRole':'EditRole',
  'teamManage.tabs.member.table.turnOver':'TransferTeam',
  'teamOther.move_team.name_label':'Modify the name',
  'teamOther.move_team.logo_label':'Modify team information',

  //集群 cluster
  'teamManage.tabs.cluster':'Cluster',
  'teamManage.tabs.cluster.openCluster':'Cluster has been opened.',
  'teamManage.tabs.cluster.open':'Open clusters',
  'teamManage.tabs.cluster.unload':'uninstall',
  'teamManage.tabs.cluster.opened':'Opened in',
  'teamManage.tabs.cluster.null':'No cluster',
  'teamManage.tabs.cluster.unloadCluster':'Uninstall cluster',
  'teamManage.tabs.cluster.unloadCluster.desc':'Uninstalling the current cluster will also delete related resources created by the team in the cluster. Are you sure you want to uninstall it?',
  // 角色 role
  'teamManage.tabs.role':'Role',
  'teamManage.tabs.role.btn.add':'Add Role',
  'teamManage.tabs.role.null':'If no role exists, add a role first',
  'teamManage.tabs.role.title':'Role List',
  'teamManage.tabs.role.list.admin':'admin',
  'teamManage.tabs.role.list.developer':'Developers',
  'teamManage.tabs.role.list.viewer':'Observer',
  'teamManage.tabs.role.list.access':'Visitor',
  'teamManage.tabs.role.list.owner':'Owner',
  'teamManage.tabs.role.list.admin':'Enterprise Administrator',
  'teamManage.tabs.role.list.app_store':'Application Marketing Manager',
  // 权限设置 Permissions
  'teamManage.tabs.role.list.permissions':'Permissions',
  'teamManage.tabs.role.list.permissions.btn.cancel':'Cancel',
  'teamManage.tabs.role.list.permissions.roleName':'Role Name',
  'teamManage.tabs.role.list.permissions.allot':'Permissions allocate',
  'teamManage.tabs.role.list.permissions.teamMsg':'Viewing Team Information',
  'teamManage.tabs.role.list.permissions.teamDynamic':'Check Team Dynamics',
  'teamManage.tabs.role.list.permissions.maven':'Managing Maven configuration',
  'teamManage.tabs.role.list.permissions.teamRegion':'Team cluster Management',
  'teamManage.tabs.role.list.permissions.teamMember':'Team member management',
  'teamManage.tabs.role.list.permissions.teamRole':'Team Role Management',
  'teamManage.tabs.role.list.permissions.app_config_group':'Application configuration group management',
  'teamManage.tabs.role.list.permissions.teamRegistryAuth':'ImageRepoAuthInfo',
  'teamManage.tabs.role.list.permissions.certificate':'Certificate management',
  'teamManage.tabs.role.list.permissions.gatewayRule':'Gateway access policy management',
  'teamManage.tabs.role.list.permissions.app':'Application management',
  'teamManage.tabs.role.list.permissions.component':'Component management',
  'teamManage.tabs.role.list.permissions.plugin':'Plugin management',
  'teamManage.tabs.role.list.permissions.edit':'Save changes',
  'teamManage.tabs.role.list.permissions.add':'Add',

  //镜像仓库授权信息 image
  'teamManage.tabs.image':'ImageRepoAuthInfo',
  'teamManage.tabs.image.table.imageAddress':'Image repository',
  'teamManage.tabs.image.table.user':'Username',
  'teamManage.tabs.image.table.password':'Password',
  'teamManage.tabs.image.table.operate':'Operation',
  'teamManage.tabs.image.table.btn.add':'Add',
  'teamManage.tabs.image.table.btn.edit':'Edit',
  'teamManage.tabs.image.table.btn.delete':'Delete',
  
}
const teamOther = {
  'teamOther.AddThirdParty.start':'Start with third-party components',
  'teamOther.AddThirdParty.Third':'Third party components',
  'teamOther.AddThirdParty.add':'Add third party components',
  'teamOther.Group.tit':'Application information',
  'teamOther.Group.desc':'An application is composed of one or more services, which can manage a complete business system, such as OA, CRM, ERP, etc., and can also manage a complete microservice architecture system. Here is the basic information of the application.',
  'teamOther.Group.app':'Application topology',
  'teamOther.Group.know':'Known',
  'teamOther.Group.Topological':'This is the service topology diagram inside the application, through which the overall running state and dependencies of services (components) can be understood. Each new service (component) will show a hexagon here, and click the hexagon to enter the service (component) management page.',
  // AllBackup
  'teamOther.AllBackup.Backup':'Backup in progress',
  'teamOther.AllBackup.success':'Backup succeeded',
  'teamOther.AllBackup.failed':'Backup failed',
  'teamOther.AllBackup.create_time':'Backup time',
  'teamOther.AllBackup.user':'Backup by',
  'teamOther.AllBackup.mode':'Backup mode',
  'teamOther.AllBackup.full-online':'Cloud Backup ',
  'teamOther.AllBackup.full-offline':'Local backup',
  'teamOther.AllBackup.backup_size':'Package size',
  'teamOther.AllBackup.state':'state',
  'teamOther.AllBackup.app':'Backup application',
  'teamOther.AllBackup.remarks':'Remarks',
  'teamOther.AllBackup.operation':'Operation',
  'teamOther.AllBackup.recovery':'Recovery',
  'teamOther.AllBackup.transfer':'Transfer',
  'teamOther.AllBackup.export':'Export',
  'teamOther.AllBackup.delete':'Delete',
  'teamOther.AllBackup.records':'Apply backup records',
  'teamOther.AllBackup.all_records':'Application backup records are all backup records of the current team, including those of deleted applications. Deleted applications can be recovered or migrated based on the backup',

  'teamOther.edit.editHead':'Modify responsible person',
  'teamOther.edit.head':'head',
  'teamOther.edit.choose':'Please select the person in charge',
  'teamOther.edit.go':'Go to the certification',
  'teamOther.edit.unbounded':'The {type} account has not been bound',

  'teamOther.CreateAppFromMarketForm.title':'Which app do you want to install?',
  'teamOther.CreateAppFromMarketForm.install':'Installation version',
  'teamOther.CreateAppFromMarketForm.setect':'Please select version',
  'teamOther.CreateAppFromMarketForm.app':'Select application',
  'teamOther.CreateAppFromMarketForm.setect_app':'Please select an application',

  'teamOther.CreateAppFromHelmForm.name_app':'App Name',
  'teamOther.CreateAppFromHelmForm.version_app':'Application version',
  'teamOther.CreateAppFromHelmForm.name':'App Name already exists',
  'teamOther.CreateAppFromHelmForm.input_name':'Please fill in the application name',
  'teamOther.CreateAppFromHelmForm.min':'Application name (minimum length: 4 digits)',
  'teamOther.CreateAppFromHelmForm.max':'The maximum length of application name is 53 bits',
  'teamOther.CreateAppFromHelmForm.only':'Only lowercase letters and numbers are supported',
  'teamOther.CreateAppFromHelmForm.note':'Application notes',
  'teamOther.CreateAppFromHelmForm.max_length':'Maximum length: 255 bits',
  'teamOther.CreateAppFromHelmForm.note_app':'Please fill in the application notes',

  'teamOther.CreateAppFromPlugin.been_installed':'Already installed',
  'teamOther.CreateAppFromPlugin.upgrade':'Upgrade',

  'teamOther.move_team.name':'Modify team name',
  'teamOther.move_team.null':'Cannot be empty!',
  'teamOther.move_team.max':'Maximum length: 32 bits',
  'teamOther.move_team.input_name':'Please enter a new team name',

  'teamOther.manage.structure':'Build',
  'teamOther.manage.log':'View build log',
  'teamOther.manage.state':'Build status',
  'teamOther.manage.list':'Plug in list',
  'teamOther.manage.information':'Version basic information',
  'teamOther.manage.modification':'Confirm modification',
  'teamOther.manage.management':'Configure group management',
  'teamOther.manage.config_name':'Configuration item name',
  'teamOther.manage.service_meta_type':'Dependent metadata type',
  'teamOther.manage.injection':'Injection type',
  'teamOther.manage.options':'Configuration item',
  'teamOther.manage.attr_name':'Attribute name:',
  'teamOther.manage.attr_type':'Attribute type:',
  'teamOther.manage.attr_alt_value':'Optional values:',
  'teamOther.manage.is_change':'Can it be modified:',
  'teamOther.manage.yes_change':'Modifiable',
  'teamOther.manage.no_change':'Non modifiable',
  'teamOther.manage.attr_info':'Brief description:',
  'teamOther.manage.action':'Operation',
  'teamOther.manage.edit':'Modify',
  'teamOther.manage.delete':'Delete',
  'teamOther.manage.add':'New configuration',
  'teamOther.manage.title':'Profile and shared storage',
  'teamOther.manage.name':'Name',
  'teamOther.manage.path':'Mount path',
  'teamOther.manage.type':'Storage type',
  'teamOther.manage.share':'Shared storage',
  'teamOther.manage.add_file':'configuration file',
  'teamOther.manage.add_storage':'Add storage',
  'teamOther.manage.already_installed':'The components of the current plug-in are already installed',
  'teamOther.manage.Component_name':'Component name',
  'teamOther.manage.version':'Installation version',
  'teamOther.manage.look':'View installed plug-ins',
  'teamOther.manage.edit_config':'Modify configuration group',

  'teamOther.AddOrEditConfig.input':'Please enter an optional value',
  'teamOther.AddOrEditConfig.only':'Only -_ It is composed of letters and numbers and cannot start with numbers',
  'teamOther.AddOrEditConfig.input_name':'Please enter a property name',
  'teamOther.AddOrEditConfig.max':'Maximum length: 32 bits',
  'teamOther.AddOrEditConfig.name':'Attribute name',
  'teamOther.AddOrEditConfig.all_agreement':'All agreements',
  'teamOther.AddOrEditConfig.agreement':'Agreement',
  'teamOther.AddOrEditConfig.select_agreement':'Select agreement',
  'teamOther.AddOrEditConfig.string':'Character string',
  'teamOther.AddOrEditConfig.choice':'Single choice',
  'teamOther.AddOrEditConfig.Multiple':'Multiple choice',
  'teamOther.AddOrEditConfig.Default':'Default',
  'teamOther.AddOrEditConfig.max_length':'Maximum length: 65535 bits',
  'teamOther.AddOrEditConfig.tooltip':'Single or multiple optional values, multiple separated by commas, such as value1, Value2',
  'teamOther.AddOrEditConfig.Optional_values':'Optional values',
  'teamOther.AddOrEditConfig.Modifiable':'Modifiable',
  'teamOther.AddOrEditConfig.unModifiable':'Non modifiable',
  'teamOther.AddOrEditConfig.Max':'Maximum length: 40 bits',
  'teamOther.AddOrEditConfig.explain':'Brief description',
  'teamOther.AddOrEditConfig.add':'Add configuration group',
  'teamOther.AddOrEditConfig.config_name':'Configuration group name',
  'teamOther.AddOrEditConfig.enter_name':'Please enter the configuration group name',
  'teamOther.AddOrEditConfig.rely_on':'Dependent metadata',
  'teamOther.AddOrEditConfig.unrely_on':'Independent',
  'teamOther.AddOrEditConfig.port':'Component port',
  'teamOther.AddOrEditConfig.downstream':'Downstream component port',
  'teamOther.AddOrEditConfig.type':'Injection type',
  'teamOther.AddOrEditConfig.env':'environment variable',
  'teamOther.AddOrEditConfig.find':'Active discovery',
  'teamOther.AddOrEditConfig.config':'Configuration item',
  'teamOther.HelmCmdForm.msg':'Error message',
  'teamOther.HelmCmdForm.error':'Installation failed! Please check the command line statement for errors!',
  'teamOther.HelmCmdForm.success':'Successful installation',
}


export default Object.assign({}, teamOverview, teamApply, teamAdd, teamGateway, teamPlugin, teamManage, teamOther);   
