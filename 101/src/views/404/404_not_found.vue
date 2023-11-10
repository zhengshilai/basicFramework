<template>
    <div class="errorpage">
        <img src="@/assets/images/404.png" alt="" style="margin-top:10%">
        <h1>您访问的页面不存在，请查看网络连接是否正常，或查看地址输入是否正确!</h1>
        <h1>The page you visited does not exist Please check whether the network connection is normal or check whether the
            address input is correct !</h1>
        <CopyRight />    
    </div>
</template>
<script>
import ZSLComponents from '@/components';
let { CopyRight } = ZSLComponents;
export default {
    name: '404_not_found',
    components: {
       CopyRight
    },
    created() {
        console.log(ZSLComponents)
    },
}
</script>

<style>
img {
    width: 40%;
    height: 40%;
}
.errorpage {
    text-align: center;
}

.errorpage h1 {
    margin: 10px;
    font-weight: 300;
}
</style>
