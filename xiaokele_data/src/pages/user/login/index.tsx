import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtGrid, AtIcon } from 'taro-ui'
import { AtList, AtListItem } from "taro-ui"

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
                <View className='at-row'>
                    <View className='at-col'>
                        <AtAvatar circle size='large' openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                    </View>
                    <View className='at-col'>
                        <AtIcon value='chevron-right' size='30' color='#F00'></AtIcon>
                    </View>
                </View>
                <AtList>
                    <AtListItem title='标题文字' onClick={this.handleClick} />
                    <AtListItem arrow='right' ><AtAvatar circle size='large' openData={{ type: 'userAvatarUrl' }}></AtAvatar></AtListItem>
                    <AtListItem title='标题文字' extraText='详细信息' />
                    <AtListItem title='禁用状态' disabled extraText='详细信息' />
                </AtList>
            </View >
        )
    }
}

