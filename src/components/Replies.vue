<template>
      <el-card shadow="hover" class="post">
        <div slot="header" class="clearfix">
            <div class="container">
                <img class="avatar fl" v-bind:src="replie.member.avatar_mini" alt="avatar">
                <a class="replie-user" :href="replie.member.url">{{ replie.member.username }}</a>
            </div>
        </div>
        <div class="content clearfix">
            <div class="replie-content" v-html="replie.content_rendered"></div>
        </div>
      </el-card>
</template>

<script>
export default {
  name: 'replie',
  props: ['replie']
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.avatar {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    -moz-border-radius: 4px;
    border-radius: 4px
}
.replie-user {
    font-weight: bold;
    color: gray;
}
.container {
    height: 40px;
}
.replie-content {
    padding: 10px;
}
</style>
