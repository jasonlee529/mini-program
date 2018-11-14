import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtGrid, AtIcon } from 'taro-ui'
import { AtList, AtListItem } from "taro-ui"

export default class UserPage extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '用户中心'
    }
    handleClick = e => {
        console.log('Click Item', e)
    }
    gridClick=(item,index)=> {
        console.log(item);
        console.log(index);
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
                    <View className='at-col at-col-11'>
                        <AtAvatar circle size='large' openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                    </View>
                    <View className='at-col'>
                        <AtIcon value='chevron-right' size='30' color='#ccc'></AtIcon>
                    </View>
                </View>
                <View className='at-row'>
                    <View className='at-col'>
                        <AtGrid onClick={this.gridClick} data={
                            [
                                {
                                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                                    url: '/page/index/index',
                                    value: '领取中心'
                                },
                                {
                                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                                    value: '找折扣'
                                },
                                {
                                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                                    value: '领会员'
                                },
                                {
                                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                                    value: '新品首发'
                                },
                                {
                                    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                                    value: '领京豆'
                                },
                                {
                                    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                                    value: '手机馆'
                                }
                            ]
                        } />
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

