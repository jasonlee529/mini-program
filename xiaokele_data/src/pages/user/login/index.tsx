import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtListItem } from "taro-ui"

export default class LoginPage extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '登录'
    }
    onGotUserInfo = e =>{
        console.log('bindGetUserInfo',e)
    }
    handleClick = e => {
        console.log('Click Item', e)
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View style='height:150px;' className='at-row at-row__justify--center'>
                    <View className='at-col at-col-6'>
                        <AtButton size='normal' openType='getUserInfo' onGetUserInfo={this.onGotUserInfo}>点击登录</AtButton>
                    </View>
                </View>
            </View >
        )
    }
}

