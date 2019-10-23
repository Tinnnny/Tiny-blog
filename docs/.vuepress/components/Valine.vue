<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
    mounted(){
        this.renderValine()
    },
    methods: {
        renderValine(){
            if (typeof window !== 'undefined') {
                this.window=window;
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');
            new Valine({
                el: '#vcomments',
                appId: 'UXS0i6pJm5XRL36P7sALfMSs-gzGzoHsz',
                appKey: 'aPWykO6aT9zf4oBMhO4LNv2h',
                notify:false,
                verify:false,
                avatar:'retro',
                placeholder: '欢迎评论留言'
            });
        }
    }
}
</script>
