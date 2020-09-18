/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { Row, Col, Input, Icon } from 'antd';
const { TextArea } = Input;

class Parameterinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{ key: '', value: '' }]
    };
  }
  onKeyChange = (index, e) => {
    const { values } = this.state;
    values[index].key = e.target.value;
    this.triggerChange(values);
    this.setValues(values);
  };
  onValueChange = (index, e) => {
    const { values } = this.state;
    values[index].value = e.target.value;
    this.triggerChange(values);
    this.setValues(values);
  };

  setValues(arr = []) {
    if (!arr.length) {
      arr.push({ key: '', value: '' });
    }
    this.setState({ values: arr });
  }
  add = () => {
    const { values } = this.state;
    this.setState({ values: values.concat({ key: '', value: '' }) });
  };
  remove = index => {
    const { values } = this.state;
    values.splice(index, 1);
    this.setValues(values);
    this.triggerChange(values);
  };

  triggerChange(values) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(values);
    }
  }

  render() {
    const {
      keyPlaceholder = '请输入key值',
      valuePlaceholder = '请输入value值'
    } = this.props;
    const { values } = this.state;
    return (
      <div>
        {values &&
          values.length > 0 &&
          values.map((item, index) => {
            return (
              <Row
                key={item.key}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Input
                  style={{ width: '370px' }}
                  name="key"
                  maxLength={255}
                  onChange={this.onKeyChange.bind(this, index)}
                  value={item.key}
                  placeholder={keyPlaceholder}
                />
                <span style={{ textAlign: 'center', padding: '0 10px' }}>
                  :
                </span>
                <div>
                  <TextArea
                    name="value"
                    rows={1}
                    style={{ width: '370px', marginRight: '10px' }}
                    maxLength={65533}
                    onChange={this.onValueChange.bind(this, index)}
                    value={item.value}
                    placeholder={valuePlaceholder}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  {index === 0 ? (
                    <Icon
                      type="plus-circle"
                      onClick={this.add}
                      style={{ fontSize: '20px' }}
                    />
                  ) : (
                    <Icon
                      type="minus-circle"
                      style={{ fontSize: '20px' }}
                      onClick={this.remove.bind(this, index)}
                    />
                  )}
                </div>
              </Row>
            );
          })}
      </div>
    );
  }
}
export default Parameterinput;
