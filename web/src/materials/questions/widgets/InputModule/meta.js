import basicConfig from '@materials/questions/common/config/basicConfig'

export const meta = {
  title: '单行输入框',
  type: 'text',
  componentName: 'InputModule',
  formConfig: [
    basicConfig,
    {
      name: 'valid',
      title: '内容限制格式',
      type: 'SelectSetter',
      key: 'valid',
      options: [
        {
          label: '请选择',
          value: ''
        },
        {
          label: '手机号',
          value: 'm'
        },
        {
          label: '身份证',
          value: 'idcard'
        },
        {
          label: '数字',
          value: 'n'
        },
        {
          label: '邮箱',
          value: 'e'
        },
        {
          label: '车牌号',
          value: 'licensePlate'
        }
      ]
    },
    {
      name: 'numberRange',
      title: '数字限制',
      type: 'RangeSetter',
      options: [],
      key: 'numberRange',
      value: [],
      cleanKeys: {
        numberRange: {
          min: {
            placeholder: '0',
            value: 0
          },
          max: {
            placeholder: '1000',
            value: 1000
          }
        }
      },
      relyFunc: (data) => data.valid && data.valid === 'n'
    },
    {
      name: 'textRange',
      title: '字数限制',
      type: 'RangeSetter',
      options: [],
      key: 'textRange',
      value: []
    },
    {
      name: 'placeholder',
      title: '引导提示文案',
      type: 'InputSetter',
      placeholder: '限制20字',
      key: 'placeholder',
      tip: '限制20字',
      validate(value) {
        if (value && value.length > 20) {
          console.warn('引导提示文案字数不能超过20个字，请修改后重新保存')
          return false
        }
        return true
      }
    }
  ]
}

export default meta
