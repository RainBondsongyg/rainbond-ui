System.register(['react'], function (_export, _context) {
  "use strict";
  var React, _createClass, _React$Component, ExampleModule;

  // 创建 React 组件的类表示
  _createClass = function (TargetClass, props) {
    props.forEach(function (prop) {
      Object.defineProperty(TargetClass.prototype, prop.key, prop);
    });
  };

  return {
    setters: [
      // 加载 React 模块并设置为本地变量
      function (_react) {
        React = _react.default;
      }
    ],
    execute: function () {
      // 创建一个继承自 React.Component 的类
      _React$Component = React.Component,
      ExampleModule = function (_React$Component) {
        // 确保正确继承
        _inherits(ExampleModule, _React$Component);

        function ExampleModule() {
          _classCallCheck(this, ExampleModule);
          return _possibleConstructorReturn(this, (ExampleModule.__proto__ || Object.getPrototypeOf(ExampleModule)).apply(this, arguments));
        }

        _createClass(ExampleModule, [{
          key: "render",
          value: function render() {
            return React.createElement(
              "div",
              null,
              React.createElement(
                "h1",
                null,
                "Dynamic Module"
              ),
              React.createElement(
                "p",
                null,
                "This module was loaded dynamically!"
              )
            );
          }
        }]);

        return ExampleModule;
      }(React.Component);

      // 导出 ExampleModule 组件
      _export('default', ExampleModule);
    }
  };
});
