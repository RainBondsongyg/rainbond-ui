//共同的信息
    //单位
    const unit = {
        'unit.entries':'PCS'
    }
    //弹框
    const popover = {
        // 弹窗新建/修改组件
        'popover.newComponent.title':'New component',
        'popover.newComponent.componentName':'Component name',
        'popover.newComponent.gitHub':'Github project',
        'popover.newComponent.gitLab':'Gitlab project',
        'popover.newComponent.versions':'versions',
        'popover.newComponent.newProject':'New project',
        'popover.newComponent.codeBranch':'Code branch',

        // 弹窗新建/修改应用
        'popover.newApp.title':'New app',
        'popover.newApp.appName':'App name',
        'popover.newApp.appEngName':'English name App',
        'popover.newApp.logo':'Logo',
        'popover.newApp.upload_pictures':'Upload pictures',
        'popover.newApp.upload_pictures.extra':'Please upload a 48 × 48 image',
        'popover.newApp.appEngName.extra':'To change the English name of an application, disable all components of the application',
        'popover.newApp.appRemark':'App note',
        'popover.newApp.appRemark.placeholder':'Please fill in the application remarks',
        'popover.newApp.appName.placeholder':'Please fill in the application name',
        'popover.newApp.appEngName.placeholder':'Please fill in the English name of the application',

        //添加/编辑http访问策略
        'popover.access_strategy.title.add':'Example Add an HTTP access policy',
        'popover.access_strategy.title.edit':'Example Edit an HTTP access policy',
        'popover.access_strategy.lable.routingRule':'Routing rules',
        'popover.access_strategy.lable.domain_name':'Domain',
        'popover.access_strategy.lable.domain_heander':'Request header',
        'popover.access_strategy.lable.the_weight':'Weight',
        'popover.access_strategy.lable.certificate_id':'HTTPs certificate',
        'popover.access_strategy.lable.function_select':'Feature selection',
        'popover.access_strategy.lable.exist_certificate_select':'Existing Certificate Selection',
        'popover.access_strategy.lable.auto_ssl_config':'Authentication configuration',
        'popover.access_strategy.lable.rule_extensions_http':'Extend functionality',
        'popover.access_strategy.lable.port':'Port number',
        'popover.access_strategy.lable.component':'Component',
        'popover.access_strategy.modal.domain':'Domain Name Resolution',
        'popover.access_strategy.lable.analysis':'Please resolve the domain name：',
        'popover.access_strategy.lable.more':'More advanced route parameters',
        'popover.access_strategy.lable.automatic_issued':'Automatic certificate issuance (certificate issuance and matching is done automatically by the controller)',
        'popover.access_strategy.lable.poll':'Load balancing algorithm: polling',
        'popover.access_strategy.lable.conversation':'Load balancing algorithm: session persistence',
        'popover.access_strategy.lable.access_target':'Access target',
        'popover.access_strategy.lable.li1':'1.HTTP access control policies are based on routing rules such as domain names. You need to add the domain name DNSA to the domain name service provider that binds the domain name to the application gateway egress IP address of the current cluster to take effect.',
        'popover.access_strategy.lable.li2':'2.Current cluster（{ currentRegion }) egress IP address is: { ip }',
        'popover.access_strategy.lable.li3':'3.If you have any questions, please contact the platform Operations administrator',
        
        //http访问策略参数配置
        'popover.config.title':'Parameter configuration',
        'popover.config.lable.proxy_connect_timeout':'Connection timeout period',
        'popover.config.lable.second':'Seconds',
        'popover.config.lable.proxy_send_timeout':'Request timeout period',
        'popover.config.lable.proxy_read_timeout':'Response timeout time',
        'popover.config.lable.proxy_body_size':'Upload restrictions',
        'popover.config.lable.proxy_buffer_numbers':'Number buffers',
        'popover.config.lable.proxy_buffer_size':'Buffer size',
        'popover.config.lable.WebSocket':'WebSocket Support',
        'popover.config.lable.proxy_buffering':'Open ProxyBuffer',
        'popover.config.lable.set_headers':'Customize request header',

        // 添加/编辑tcp/udp访问策略
        'popover.tcp.title.add':'TCP/UDP access policy is added',
        'popover.tcp.title.edit':'Edit TCP/UDP access policy',
        'popover.tcp.lable.rule_extensions':'Load balancing',
        'popover.tcp.lable.poll':'Polling',

        //tcp/udp访问策略参数配置
        'popover.tcp.config.title':'Connection information',
        'popover.tcp.config.table.attr_name':'Variable name',
        'popover.tcp.config.table.attr_value':'Variable value',
        'popover.tcp.config.table.name':'Instructions',


        // 弹框确定取消
        'popover.confirm':'OK',
        'popover.back':'Back',
        'popover.cancel':'Cancel',

        // 位置：企业视图>总览>加入团队
        'popover.enterpriseOverview.joinTeam.title':'Add team',
        'popover.enterpriseOverview.joinTeam.label':'Team name',
        'popover.enterpriseOverview.joinTeam.message':'Please select team',
        'popover.enterpriseOverview.joinTeam.placeholder':'Please select a team',
        'popover.enterpriseOverview.joinTeam.hint':'No team can be added. You can create a team first.',

        // 位置：企业视图>总览>创建团队
        'popover.enterpriseOverview.setUpTeam.title':'Create team',
        // label
        'popover.enterpriseOverview.setUpTeam.label.name':'Team name',
        'popover.enterpriseOverview.setUpTeam.label.englishName':'English team name',
        'popover.enterpriseOverview.setUpTeam.label.colony':'Cluster',
        // placeholder
        'popover.enterpriseOverview.setUpTeam.placeholder.name':'Please enter the team name',
        'popover.enterpriseOverview.setUpTeam.placeholder.englishName':'The English name of the team',
        'popover.enterpriseOverview.setUpTeam.placeholder.colony':'Select the cluster',
        // conformDesc
        'popover.enterpriseOverview.setUpTeam.conformDesc.name':'Please enter the name of the team to be created. The maximum length is 10 characters',
        'popover.enterpriseOverview.setUpTeam.conformDesc.englishName':'The namespace used by the team in the cluster',
        'popover.enterpriseOverview.setUpTeam.conformDesc.colony':'Select a use cluster',
        // message
        'popover.enterpriseOverview.setUpTeam.message.name':'Please enter the team name',
        'popover.enterpriseOverview.setUpTeam.message.englishName':'Please enter the English name of the team',
        'popover.enterpriseOverview.setUpTeam.message.colony':'Please select a cluster',

        //位置：企业视图>应用市场>添加应用商店
        'popover.applicationMarket.addMarket.title':'Add an App Store',
        'popover.applicationMarket.local':'Local component library',
        'popover.applicationMarket.all':'All',
        'popover.applicationMarket.company':'Company release',
        'popover.applicationMarket.team':'Team release',
        
    }
    const button = {
        'button.delete':'Delete',
        'button.edit':'Edit',
        'button.search':'Search',
        'button.install':'Install',
        'button.read_only':'Read only',
        'button.push':'Push',
        'button.switch.open':'Open',
        'button.switch.close':'Close',
        'button.close':'Close',
        'button.open':'Open',
        'button.submit':'Submit',
        'button.give_up_release':'Give up release',
        'button.affirm_publish':'Confirm release',
        'button.retry':'Retry',
        'button.forced_backup':'Forced backup',
        'button.migration':'Migration',
        'button.recover':'Restore',
        'button.update':'Update',
        'button.cancel':'Cancel',
        'button.confirm':'Confirm',
        'button.save':'Save',
        'button.retest_check':'Re-test',
        'button.abandon_create':'Give up create',
        'button.advanced_setup':'Advanced setup',
        'button.create':'Create',
        'button.confirm_create':'Confirm create',
        'button.confirm_update':'Confirm change',
        'button.components_build':'Enter multi-component build',
        'button.service_build':'Enter multi-service build',
        'button.build_start':'And build launch',
        'button.be_authorized':'Be granted',
        'button.umount':'Umount',
        'button.build_component':'Build component',
        'button.add_depend':'Add dependent',
        'button.add_port':'Add port',
    }
    const status = {
        'status.component.running':'Running',
        'status.component.health':'Health',
        'status.component.not_health':'Not_health',
        'status.component.abnormally':'Abnormally',
        'status.component.closed':'Closed',
        'status.component.off_line':'Off_line',
        'status.app.backups.backuping':'Backuping',
        'status.app.backups.error':'Backup failure',
        'status.app.backups.success':'Backup success',
        'status.app.backups.yolkStroke':'Backup Export',
        'status.app.backups.imported':'Backup has been imported',
        'status.loading':'Loading...',
        'status.not_mount':'Not mount',
        'status.mounted':'Mounted',
    }
    const confirmModal = {
        //修改应用信息 删除应用
        'confirmModal.app.title.edit':'修改应用信息',
        'confirmModal.app.title.delete':'删除应用',
        'confirmModal.backup.title.delete':'删除备份',
        'confirmModal.delete.strategy.title':'删除策略',
        'confirmModal.delete.configuration.title':'删除配置组',
        'confirmModal.delete.resource.title':'属性删除',
        'confirmModal.abandon_create.create_check.title':'放弃创建',
        'confirmModal.compose.update.title':'修改compose内容',
        'confirmModal.umount.dalete.title':'取消挂载',
        'confirmModal.path.delete.title':'删除存储目录',
        'confirmModal.port.delete.title':'端口删除',
        'confirmModal.domain.delete.title':'域名解绑',

        //组件提示
        'confirmModal.delete.strategy.subDesc':'此操作不可恢复',
        'confirmModal.component.restart.title':'确认要重启该组件吗？',
        'confirmModal.component.start.title':'确认要启动该组件吗？',
        'confirmModal.component.stop.title':'确认要关闭该组件吗？',
        'confirmModal.component.abandon.publish.title':'确定要放弃此次发布吗?',
        'confirmModal.app.delete.desc':'确定要此删除此应用吗？',
        'confirmModal.backup.delete.desc':'确定要删除此备份吗？',
        'confirmModal.delete.strategy.desc':'确定要删除此策略吗?',
        'confirmModal.delete.configuration.desc':'确定要删除此配置组吗？',
        'confirmModal.delete.resource.desc':'确定要删除此属性吗？',
        'confirmModal.delete.create_check.desc':'确定要放弃创建此组件吗？',
        'confirmModal.delete.create_check_app.desc':'确定要放弃创建此应用吗？',
        'confirmModal.delete.umount.desc':'确定要取消此挂载目录吗?',
        'confirmModal.delete.path.desc':'确定要删除此存储目录吗?',
        'confirmModal.delete.port.desc':'确定要删除此端口吗？',
        'confirmModal.delete.domain.desc':'确定要解绑此域名吗？',

        //友情提示
        'confirmModal.friendly_reminder.title':'友情提示',
        'confirmModal.friendly_reminder.pages.desc':'{ codeObj }当前应用下的全部组件？',
        
        //应用复制
        'confirmModal.app.title.copy':'应用复制',
        'confirmModal.app.label.teamRegion':'复制到',
        'confirmModal.app.label.build':'构建源信息',
        'confirmModal.app.label.editVersions':'版本修改',
        'confirmModal.app.label.branch':'分支',
        'confirmModal.app.label.tag':'Tag',
        'confirmModal.app.label.not_change':'暂不支持变更版本',
        'confirmModal.app.label.third_party':'第三方组件',
        'confirmModal.app.label.mirror_image':'镜像:',
        'confirmModal.app.label.sound_code':'源码:',
        'confirmModal.app.label.component_library':'组件库:',
        'confirmModal.app.label.local':'本地文件:',
        'confirmModal.app.label.editVersions':'版本修改',

        //应用治理模式切换
        'confirmModal.app.govern.title':'应用治理模式切换',
        'confirmModal.app.govern.alert.msg':'应用治理模式主要指组件间通信模式的治理，目前支持内置ServiceMesh模式,Istio治理模式和Kubernetes原生Service模式',
        'confirmModal.app.govern.label.name_port':'组件名称/端口',
        'confirmModal.app.govern.label.alias':'别名',
        'confirmModal.app.govern.label.DNS':'内部域名',
        'confirmModal.app.govern.label.change':'治理模式选择',
        'confirmModal.app.govern.label.mode':'模式说明',
        'confirmModal.app.govern.label.service':'该模式组件间使用Kubernetes service名称域名进行通信，用户需要配置每个组件端口注册的service名称，治理能力有限.',
        'confirmModal.app.govern.label.serviceMesh':'内置ServiceMesh模式需要用户显示的配置组件间的依赖关系，平台会在下游组件中自动注入sidecar容器组成ServiceMesh微服务架构，业务间通信地址统一为localhost模式',
        'confirmModal.app.govern.label.istio':'该模式组件间使用Kubernetes service名称域名进行通信，用户需要配置每个组件端口注册的service名称，且安装Istio  control plane ，通过Istio进行治理。',

        //修改负责人
        'confirmModal.app.title.principal':'修改负责人',
        'confirmModal.app.lable.principal':'负责人',


        //删除策略
        'confirmModal.delete.strategy.title':'删除策略',
        'confirmModal.delete.strategy.subDesc':'此操作不可恢复',
        'confirmModal.delete.strategy.desc':'确定要删除此策略吗?',

        //删除/编辑/添加成员
        'confirmModal.add.member':'添加成员',
        'confirmModal.delete.member':'删除成员',
        'confirmModal.delete.member.desc':'确定要删除此成员吗？',
        'confirmModal.edit.member':'编辑成员',
        'confirmModal.lable.member.user_name':'用户名',
        'confirmModal.lable.member.user_ids':'选择用户',
        'confirmModal.lable.member.role_ids':'选择角色',

        //移交团队
        'confirmModal.MoveTeam.title':'移交团队',
        'confirmModal.MoveTeam.subDesc':'移交后您将失去所有权',
        'confirmModal.MoveTeam.desc':'确定要把团队移交给 { nick_name } 吗？',

        //开通集群
        'confirmModal.openRegion.title':'开通集群',
        'confirmModal.openRegion.alert':'暂无其他集群，请到集群管理面板中添加更多集群',
        'confirmModal.openRegion.table.region_alias':'名称',
        'confirmModal.openRegion.table.region_name':'集群',
        'confirmModal.openRegion.table.desc':'简介',
        'confirmModal.openRegion.card.title':'当前团队没有集群，请先开通"',

        //添加/修改镜像仓库授权信息
        'confirmModal.add.image.title':'添加镜像仓库授权信息',
        'confirmModal.edit.image.title':'修改镜像仓库授权信息',
        'confirmModal.image.lable.domain':'镜像仓库地址',
        'confirmModal.image.lable.username':'用户名',
        'confirmModal.image.lable.password':'密码',

        //提示
        'confirmModal.component.hint':'提示',
        'confirmModal.component.request_Error':'请求错误',

        //检测
        'confirmModal.component.check.title.loading':'组件构建源检测中...',
        'confirmModal.component.check.title.success':'组件构建源检测通过',
        'confirmModal.component.check.title.error':'组件构建源检测未通过',
        'confirmModal.component.check.title.error.component_check':'组件检测未通过',
        'confirmModal.component.check.title.success.component_check':'组件检测通过',
        'confirmModal.component_build.check.model.build':'组件构建源检测出多模块构建',
        'confirmModal.component.check.title.error.description':'请核对并修改以下信息后，再重新检测。',
        'confirmModal.third_party.check.title.success':'第三方组件检测通过',
        'confirmModal.component.check.appShare.desc':'此过程可能比较耗时，请耐心等待',
        'confirmModal.check.appShare.title.loading':'应用同步中',
        'confirmModal.check.appShare.title.success':'应用同步成功',
        'confirmModal.check.appShare.title.error':'请查看以下日志确认问题后重试',
        'confirmModal.check.appShare.title.loading':'应用同步中',
        // 删除组件
        'confirmModal.assembly.delete.title':'Remove component',
        'confirmModal.assembly.delete.desc':'Are you sure you want to delete this component?',
        'confirmModal.assembly.delete.subDesc':'This operation is not recoverable',

        // 删除配置
        'confirmModal.deldete.configure.title':'Delete configuration',
        'confirmModal.deldete.configure.desc':'Are you sure you want to delete the configuration?',

        // 删除监控视图
        'confirmModal.deldete.monitor.title':'Delete monitoring view',
        'confirmModal.deldete.monitor.desc':'Are you sure you want to delete this view?',
        'confirmModal.deldete.monitor.subDesc':'This operation is not recoverable',

        // 删除指标
        'confirmModal.deldete.index.title':'Delete indicator',
        'confirmModal.deldete.index.desc':'Delete this indicator',

        // 删除配置文件
        'confirmModal.deldete.configurationFile.title':'Delete profile',
        'confirmModal.deldete.configurationFile.desc':'Are you sure you want to delete this profile?',

        // 取消挂载共享配置文件
        'confirmModal.deldete.unmount.title':'Unmount shared profile',
        'confirmModal.deldete.unmount.desc':'Are you sure you want to cancel this mounting of the shared profile directory?',

        // 转移环境变量
        'confirmModal.deldete.transfer.title':'Transfer environment variable',
        'confirmModal.deldete.transfer.desc':'Are you sure you want to convert this environment variable to a component connection information variable?',
        'confirmModal.deldete.transfer.title_information':'Transfer connection information variable',
        'confirmModal.deldete.transfer.desc_information':'Are you sure you want to convert this connection information variable to an environment variable?',
        'confirmModal.deldete.transfer.subDesc':'This operation is not recoverable',
        'confirmModal.deldete.transfer.determine':'Are you sure you want to transfer this variable?',


    
        // 删除环境变量
        'confirmModal.deldete.env.title':'Delete variable',
        'confirmModal.deldete.env.desc':'Are you sure you want to delete this variable?',
        'confirmModal.deldete.env.subDesc':'This operation is not recoverable',

        // 取消挂载
        'confirmModal.deldete.Unmount.title':'Unmount',
        'confirmModal.deldete.Unmount.desc':'Are you sure you want to cancel this mount directory?',

        // 删除目录
        'confirmModal.deldete.storage.title':'Delete storage directory',
        'confirmModal.deldete.storage.desc':'Are you sure you want to delete this storage directory?',

        // 端口删除
        'confirmModal.deldete.port.title':'Port delete',
        'confirmModal.deldete.port.desc':'Are you sure you want to delete this port?',
        'confirmModal.deldete.port.subDesc':'This operation is not recoverable?',

        // 域名解绑
        'confirmModal.deldete.unbound.title':'Domain name unbound',
        'confirmModal.deldete.unbound.desc':'Are you sure you want to unbind this domain name?',

        // 卸载插件
        'confirmModal.deldete.plugin.title':'Uninstall plug-ins',
        'confirmModal.deldete.plugin.desc':'Are you sure you want to uninstall this plug-in?',

        //删除此Maven配置
        'confirmModal.deldete.Maven.title':'Delete this Maven configuration',
        'confirmModal.deldete.Maven.desc':'Delete this Maven configuration. This configuration is the default Maven configuration in the cluster. If deleted, all components that use this configuration will be affected in the cluster？',
        'confirmModal.deldete.Maven.desc_delete':'Are you sure you want to delete this Maven configuration?',
        'confirmModal.deldete.Maven.subDesc':'This operation is not recoverable',

        // 属性删除
        'confirmModal.deldete.attribute.title':'Attribute to delete',
        'confirmModal.deldete.attribute.desc':'Are you sure you want to delete this property?',
        'confirmModal.deldete.attribute.subDesc':'This operation is not recoverable',

        
    }
    const notification = {
        // 成功
        'notification.success.delete':'Delete success',
        'notification.success.setUp':'Create success',
        'notification.success.edit':'Edit success',
        'notification.success.add':'Add success',
        'notification.success.upload':'Update success',
        'notification.success.open':'Open success',
        'notification.success.close':'Close success',
        'notification.success.save':'Save success',
        'notification.success.updates':'Update success',
        'notification.success.migration':'Migration success',
        'notification.success.change':'Modify success',
        'notification.success.update':'Update success',
        'notification.success.open':'Open success',
        'notification.success.close':'Close success',
        'notification.success.save':'Save success',
        'notification.success.deployment':'Operation successful, deployment in progress',
        'notification.success.upgrade':'Operation succeeded, upgrading in progress',
        'notification.success.rollback':'Operation succeeded, rollback in progress',
        'notification.success.takeEffect':'Take effect after restarting the application',
        'notification.success.succeeded':'Operation succeeded',
        'notification.success.operationRestart':'Operation successful, restarting',
        'notification.success.operationStart':'Operation successful, starting',
        'notification.success.operationClose':'Operation succeeded, closing',
        'notification.success.operationUpdata':'Operation succeeded, updating',
        'notification.success.operationImplement':'Operation succeeded, executing',
        'notification.success.modified':'Modified successfully',
        'notification.success.setupAssembly':'The setting is successful and takes effect after the component is updated',
        'notification.success.closeAssembly':'The setting takes effect after the component is updated. The setting takes effect after the component is updated',
        'notification.success.Failed':'Failed!',
        'notification.success.transfer':'Transfer succeeded',
        'notification.success.copy':'Copy succeeded',
        'notification.success.enable':'Enabled successfully',
        'notification.success.deactivate':'Deactivated successfully',
        'notification.success.operationToUpdate':'The operation is successful and needs to be updated to take effect',
        'notification.success.openToUpdate':'Successfully opened. It needs to be updated to take effect',
        'notification.success.uninstallToUpdate':'Uninstallation succeeded. Update is required to take effect',
        'notification.success.secondary':'Secondary domain name added successfully',
        'notification.success.edit_port':'Port modified successfully',
        'notification.success.cannotModify':'Port cannot be modified',
        'notification.success.upload_file':'File uploaded successfully',
        'notification.success.delete_file':'File deleted successfully',
        'notification.success.edit_deploy':'The modification is successful. It will take effect when the next deployment is built',
        'notification.success.to_update':'Update succeeded',
        'notification.success.assembly_start':'Enabled successfully. Please update the component before it takes effect',
        'notification.success.assembly_disable':'Disabled successfully. Please update the component before it takes effect',
        'notification.success.assembly_edit':'Edit succeeded. Please update the component before it takes effect',
        'notification.success.assembly_add':'Successfully added, restart or update is required to take effect',
        'notification.success.data_save':'Data saved successfully',
        'notification.success.attribute_delete':'Property deleted successfully',
        'notification.success.attribute_edit':'The property is modified successfully and takes effect after restart',
        'notification.success.attribute_add':'The content is added successfully and takes effect after restart',

        // 失败
        'notification.error.delete':'Delete failure',
        'notification.error.setUp':'Create failure',
        'notification.error.edit':'Edit failure',
        'notification.error.add':'Add failure',
        'notification.error.update':'Update failure',
        'notification.error.migration':'Migration failure，Please migrate again.',
        'notification.error.change':'Modify failure',
        'notification.error.close':'Closing failed',
        'notification.error.upload':'Please upload files ending in. txt.json.yaml.yaml.xml',
        'notification.error.notDetected':'Upload file not detected',


        // 警告
        'notification.warn.team':'Please join the team first!',
        'notification.warn.app':'Create the app first!',
        'notification.warn.cannot_select':'Cannot select the current application',
        'notification.warn.error':'Request error',
        'notification.warn.executing':'Executing operation, please wait',
        'notification.warn.notYet':'No instance details',
        'notification.warn.choice.catalogue':'Please select the directory to mount the shared profile',
        'notification.warn.inspect.fillIn':'Please check whether the local configuration file directory is filled in',
        'notification.warn.relyOn':'Please select the application to depend on',
        'notification.warn.state':'After the storage configuration of stateful components changes',
        'notification.warn.restart':'You need to restart the component to take effect',
        'notification.warn.mountPath':'The mount path is not available',
        'notification.warn.catalogue':'Please select the directory to mount',
        'notification.warn.fillIn':'Please check whether the local storage directory is filled in',
        'notification.warn.update_language':'Failed to update language',
        'notification.warn.update_xml':'Please upload a file ending in. XML',
        'notification.warn.assembly_close':'Please close the component before changing the status',
        'notification.warn.label':'Please select the label to add',

        //提示
        'notification.hint.component.change':'切换成功、更新组件后生效',
        'notification.hint.component.putBatchMove':'批量移动中',
        'notification.hint.component.putBatchStop':'批量关闭中',
        'notification.hint.component.putBatchStart':'批量启动中',
        'notification.hint.component.putBatchRestart':'批量重启中',
        'notification.hint.component.putBatchUpgrade':'批量更新中',
        'notification.hint.component.putBatchDeploy':'批量构建中',
        'notification.hint.component.putReStart':'操作成功，重启中',
        'notification.hint.component.putStart':'操作成功，启动中',
        'notification.hint.component.putStop':'操作成功，关闭中',

         //其他
         'notification.hint.migration.team':'请选择迁移团队',
         'notification.hint.migration.cluster':'请选择迁移集群',
         'notification.hint.migration.loading.desc':'迁移中，请稍后(请勿关闭弹窗)',
         'notification.hint.migration.warning.alert':'本地备份不能进行跨集群迁移',
         'notification.hint.recover.loading':'恢复中，请稍后(请勿关闭弹窗)',
         'notification.hint.recover.success.delete':'恢复成功，是否删除当前应用？',
         'notification.hint.recover.error.alert':'恢复失败，请重新恢复',
         'notification.hint.recover.alert':'您是否要恢复备份到当前集群?',
         'notification.hint.recover.warning.continue':'您当前应用未完全恢复，是否继续？',
         'notification.hint.confiuration.update.title':'需更新组件立即生效',
         'notification.hint.confiuration.update.content':'是否立即更新组件',
         'notification.hint.confiuration.editContent':'请编辑内容',
         'notification.hint.resource.msg':'yaml文件内容不能为空',
         'notification.hint.needUpdate.msg':'需要更新才能生效',
         'notification.hint.select_depend.msg':'请选择要依赖的应用',
        'notification.hint.toUpdata':'Update required to take effect',
        'notification.hint.selectPort':'You have not selected a port, please select a port first!',
        'notification.hint.need_updata':'It needs to be updated before it can take effect',
    }
    const placeholder = {
        'placeholder.appName':'Select an application to which you want to apply',
        'placeholder.service_cname':'Give the component a name',
        'placeholder.k8s_component_name':'Please enter the English name of the component',
        'placeholder.git_url':'Please enter the warehouse address',
        'placeholder.code_version':'Please enter the code version',
        'placeholder.notGit_url':'The warehouse address is invalid',
        'placeholder.subdirectories':'Please enter a subdirectory path',
        'placeholder.password_1':'Please enter the warehouse password',
        'placeholder.username_1':'Please enter a warehouse user name',
        'placeholder.select':'Please select',
        'placeholder.selectPort':'Please select port',
        'placeholder.selectComponent':'Please select component',
        'placeholder.max24':'The value contains a maximum of 24 characters',
        'placeholder.docker_cmdMsg':'Please enter the image name',
        'placeholder.docker_cmd':'Please enter the image name, such as nginx: 1.11',
        'placeholder.dockerRunMsg':'Enter the DockerRun command',
        'placeholder.dockerRun':'For example： docker run -d -p 8080:8080 -e PWD=1qa2ws --name=tomcat_demo tomcat',
        'placeholder.yaml_content':'Enter the DockerCompose configuration content',
        'placeholder.user_name':'Please enter a warehouse user name',
        'placeholder.password':'Please enter the warehouse password',
        'placeholder.group_name':'Please enter the application name',
        'placeholder.component_cname':'Please enter a component name',
        'placeholder.endpoints':'Select the endPoints type!',
        'placeholder.componentAddress':'Please enter the component address',
        'placeholder.nameSpaceMsg':'Please enter the Namesapce',
        'placeholder.nameSpace':'If left blank, it defaults to Namesapce, where the current team is located',
        'placeholder.serviceName':'Please enter the service name',
        'placeholder.attrName':'Please enter the correct address',
        'placeholder.notAttrName':'Component addresses must be different',
        'placeholder.nameSpaceReg':'Only lowercase letters, digits, and hyphens (-) are supported and must start with a letter and end with a digit or letter',
        'placeholder.max32':'The value cannot exceed 32 characters',
        'placeholder.nonsupport':'Does not support{ nonsupport }',
        'placeholder.nonsupport.regAddress':'Address',
        'placeholder.roleName':'Please enter a role name',
        'placeholder.permissions':'To allocate!',
        'placeholder.nonsupport.regLoopBack':'Loopback interface address',
        'placeholder.max255':'The value contains a maximum of 255 characters',
        'placeholder.preview_image':'Preview image',
        'placeholder.component_not_name':'The component to be created does not yet have a name',
        'placeholder.not_available':'No project exists. Please create one first',
        'placeholder.no_spaces':'Do not enter spaces',
        'placeholder.addDomain':'Please add a domain name',
        'placeholder.addDomain.pattern':'Please fill in the correct domain name format and support pan domain name',
        'placeholder.path.absolute':'Please enter an absolute path',
        'placeholder.max1024':'Maximum length: 1024',
        'placeholder.certificate.bound':'Please bind the certificate',
        'placeholder.certificate.remove':'Remove certificate binding',
        'placeholder.select.sign_issue':'Please select the certificate issuing authentication configuration',
        'placeholder.select.rule_extensions_round':'Please select a load balancing type',
        'placeholder.int':'Please enter an integer',
        'placeholder.4k':'The input value is too small or not a legal number. It is recommended to set at least 4K',
        'placeholder.max65535':'Maximum input value: 65535',
        'placeholder.min0':'Minimum input value: 0',
        'placeholder.proxy_connect_timeout':'Please enter the timeout time',
        'placeholder.proxy_send_timeout':'Please enter the request timeout time',
        'placeholder.proxy_read_timeout':'Please enter the response timeout time',
        'placeholder.proxy_body_size':'Please enter',
        'placeholder.proxy_buffer_size':'Please enter the buffer size',
        'placeholder.app':'Please select an application',
        'placeholder.ipOrPort':'Please enter the complete IP and port',
        'placeholder.internal_port':'This port belongs to internal port, please re-enter',
        'placeholder.limit':'The port number is limited to 1-65534',
        'placeholder.plugin.plugin_alias':'The plug-in to be created has no name',
        'placeholder.plugin.plugin_aliasMsg':'Please name the plug-in you created',
        'placeholder.plugin.build_source':'Please select the plug-in installation source',
        'placeholder.plugin.category':'Please select a category',
        'placeholder.plugin.image':'Please enter the image address (name :tag) such as nginx:1.11',
        'placeholder.plugin.code_repo':'Please enter the GIT address of the source code (the dockerfile must be included)',
        'placeholder.plugin.labelName':'Minimum memory',
        'placeholder.plugin.message':'Please select the minimum memory',
        'placeholder.plugin.min_cpu':'Please enter the CPU',
        'placeholder.plugin.min_cpuMsg':'Only integers are allowed',
        'placeholder.plugin.build_cmd':'Please enter the startup command of the plug-in',
        'placeholder.plugin.update_info':'Please enter the update description',
        'placeholder.plugin.desc':'Please enter a sentence description',
        'placeholder.userName':'Please enter the user name',
        'placeholder.user_ids':'Please select the user to add',
        'placeholder.role_ids':'Please select a role',
        'placeholder.open_colony':'Please select the cluster to be opened',
        'placeholder.not_Chinese':'Cannot input Chinese characters',
        'placeholder.reg_Chinese':'Wrong writing format',
        'placeholder.regEmpty':'Defect number cannot be empty',
        'placeholder.templateFile':'Select the Values file',
        'placeholder.helm.version':'Please select version',
        'placeholder.helm.overrides':'Please fill in Values',
        'placeholder.copy.team_region':'Team / Cluster',
        'placeholder.copy.not_null':'Cannot be empty',
        'placeholder.k8s_service_name.msg':'Must consist of lowercase letters, numbers, and -, and must begin with a lowercase letter and end with a number and lowercase letter',
        'placeholder.max63':'Maximum length: 63 bits',
        'placeholder.govern.change':'Control plane is not installed and cannot be switched',
        'placeholder.govern.is_valid':'Format error!',
        'placeholder.app_not_name':'The application to be created does not have a name',
        'placeholder.appShare.formatError':'Incorrect input format',
        'placeholder.appShare.min_node':'Please enter the minimum node',
        'placeholder.appShare.max_node':'Please enter the maximum node',
        'placeholder.appShare.step_node':'Please enter the node step size',
        'placeholder.appShare.init_memory':'Please enter the initial memory',
        'placeholder.appShare.container_cpu':'Please enter the CPU',
        'placeholder.appShare.versions_notNull':'Version cannot be empty, please select or add a version',
        'placeholder.appShare.layout_grid_mode':'Only numbers, version format :1.0 or 1.0.0 are allowed',
        'placeholder.appShare.leastOne':'Please publish at least one component',
        'placeholder.appShare.appTemplate':'Application template selection is required',
        'placeholder.appShare.selectAppTemplate':'Select the published application template',
        'placeholder.appShare.version':'The version number is the last published version of the selected template by default',
        'placeholder.appShare.max64':'Maximum length: 64 bits',
        'placeholder.appShare.version_alias':'Set version alias, such as advanced version',
        'placeholder.appShare.describe':'Please enter the Version Description',
        'placeholder.appShare.retain':'Please keep at least one component',
        'placeholder.appShare.appPublish.name':'Please enter a name',
        'placeholder.appShare.scopePublish':'Please select the publishing scope',
        'placeholder.appShare.org_id':'Please select industry',
        'placeholder.appShare.addTag_ids':'Please add a label',
        'placeholder.appShare.kindTag':'Please select a classification label',
        'placeholder.appShare.describe':'Please enter the introduction',
        'placeholder.appShare.picLogo':'Please upload the icon',
        'placeholder.appShare.select.shop':'Please select the store to publish',
        'placeholder.backup.note':'Please write the backup description',
        'placeholder.backup.select.team':'Please select a team',
        'placeholder.contiguration.msg.config_group_name':'Please fill in the configuration group name',
        'placeholder.contiguration.msg.min2':'Minimum length: 2 bits',
        'placeholder.contiguration.msg.config_items':'Please fill in the configuration item',
        'placeholder.contiguration.msg.service_ids':'Please select an effective component',
        'placeholder.contiguration.msg.rule':'The value must contain letters, digits, and hyphens (.). The value cannot start with a digit',
        'placeholder.contiguration.msg.not_null':'Configuration item key value cannot be empty',
        'placeholder.contiguration.msg.key':'Please enter the key value',
        'placeholder.contiguration.msg.value':'Please enter a value',
        'placeholder.image.service_cname':'Please name the app you created',
        'placeholder.git_url.error':'Incorrect warehouse address',
        'placeholder.input_content':'Please enter the content',
        'placeholder.setting.extend_method':'Please select component type',
        'placeholder.setting.schedule':'Please select a running rule',
        'placeholder.setting.min_memory':'Please select memory',
        'placeholder.component_search':'Please enter the component name to search',
    }
    const tooltip = {
        'tooltip.visit':'跳转到组件对外访问端口对应的域名地址',
    }

export default Object.assign({}, unit, popover, button, notification, placeholder, tooltip, confirmModal, status);
