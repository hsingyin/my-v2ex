<template>
      <el-card shadow="hover" class="post">
        <div slot="header" class="clearfix">
          <div class="container">
            <div class="post-prview">
              <img class="avatar" v-bind:src="postData.member.avatar_mini" alt="avatar">
              <a class="post-title" @click="handlePostDetail">{{ postData.title }}</a>
              <el-badge :value="postData.replies" :max="999" class="replies-num">
                <el-button>回帖</el-button>
              </el-badge>
              <a class="author" v-bind:href="postData.member.url">{{ postData.member.username }}</a>
            </div>
          </div>
        </div>
        <div class="content clearfix">
          <el-button class="node-name" round size="small"># {{ postData.node.title }}</el-button>
          <el-button class="post-detail" style="float: right;" type="text" v-bind:href="postData.url">查看原帖</el-button>
        </div>
      </el-card>
</template>

<script>
export default {
  name: 'post',
  props: ['postData'],
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
    handlePostDetail () {
      this.$router.push({path: '/postDetail/' + this.postData.id})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.post {
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 8px;
}
.post-prview {
  height: 50px;
}
.avatar {
  width: 48px;
  height: 48px;
  float: left;
}
.post-title {
  width: 80%;
  padding-left: 10px;
  color: #1a1a1a;
  text-align: left;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 600;
  cursor: pointer;
  float: left;
}
.author {
  padding-left: 10px;
  color: gray;
  float: left;
}
.replies-num {
  width: 50px;
  height: 30px;
  margin-right: 18px;
  float: right;
}
.post-detail {
  padding-right: 20px;
  float: right;
}
.node-name {
  margin-top: 4px;
  margin-left: 10px;
}
</style>

<style>
.post .el-card__body {
  padding: 0;
}
</style>
