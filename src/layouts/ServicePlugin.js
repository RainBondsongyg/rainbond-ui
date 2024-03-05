import React from 'react';
import System from 'systemjs/dist/system.js';

const SystemJS = System;

SystemJS.config({
  baseURL: '/layouts',
  defaultExtension: 'js',
  transpiler: 'transpiler-module',
  packages: {
    plugins: {
      defaultExtension: 'js',
    },
  },
  meta: {
    '/*': {
      esModule: true,
      authorization: false,
      loader: 'plugin-loader',
    },
  },
});

// SystemJS.registry.set('plugin-loader', SystemJS.newModule({ locate: '/DynamicModule.js' }));
SystemJS.registry.set('plugin-loader', SystemJS.newModule({
  locate: function(load) {
    // 示例：直接返回模块的路径
    // 实际应用中，这里可以根据load的信息动态计算路径
    return Promise.resolve(load.name);
  }
}));

class DynamicLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { DynamicComponent: null };
  }

  componentDidMount() {
    console.log(SystemJS.import('/DynamicModule.js'), 'SystemJS.import')
    SystemJS.import('/DynamicModule.js').then((module) => {
      console.log(module, 'module')
      this.setState({ DynamicComponent: module.default });
    }).catch(err => console.error("Failed to load the dynamic module", err));
  }

  render() {
    const { DynamicComponent } = this.state;
    return (
      <div>
        {DynamicComponent ? <DynamicComponent /> : <p>Loading dynamic module...</p>}
      </div>
    );
  }
}

export default DynamicLoader;
