<template>
    <el-container class="wrap">
      <el-header class="header" height="120px">
        <div class="logo"></div>
        <el-breadcrumb separator="/" class="nav">
          <el-breadcrumb-item :to="{ path: '/' }">最热</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">最新</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">节点</a></el-breadcrumb-item>
          <!-- <el-breadcrumb-item><a href="/">关于</a></el-breadcrumb-item> -->
        </el-breadcrumb>
      </el-header>
      <el-main class="main">
          <el-card shadow="always" class="post">
            <div slot="header" class="clearfix">
                <div class="container">
                    <img class="avatar fr" v-bind:src="postContent.member.avatar_mini" alt="avatar">
                    <el-button size="mini" round> #{{ postContent.node.title }}</el-button>
                    <h1 class="post-title">{{ postContent.title }}</h1>
                    <small class="post-author">{{postContent.member.username}}   ● 最后回复 ● {{postContent.last_reply_by}}</small>
                </div>
            </div>
            <div class="content clearfix">
                <div class="post-content" v-html="postContent.content_rendered"></div>
            </div>
          </el-card>
          <ul>
            <replie class="replie" v-for="replie in postReplies" :key="replie.id" :replie="replie"></replie>
          </ul>
      </el-main>
      <el-footer class="footer">@hsingyin</el-footer>
    </el-container>
</template>
<script>
import Replies from '@/components/Replies'
export default {
  name: 'postDetail',
  components: {
    'replie': Replies
  },
  data () {
    return {
      postContent: {},
      postReplies: []
    }
  },
  created: function () {
    this.handlePostContent(this.$route.params.id)
    this.handlePostReplies(this.$route.params.id)
  },
  methods: {
    handlePostContent (id) {
    // 获取对应主题下的信息
      this.$axios.get('api/topics/show.json', {
        params: {
          id: id
        }
      })
        .then((response) => {
          console.log(response.data)
          this.postContent = response.data[0]
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handlePostReplies (id) {
    // 获取回复
      this.$axios.get('api/replies/show.json', {
        params: {
          topic_id: id
        }
      })
        .then((response) => {
          console.log(response.data)
          this.postReplies = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: inherit;
  text-decoration: none;
}
.fr {
    float: right;
}
.wrap {
  width: 1000px;
  margin: 0 auto;
  height: auto;
}
.main {
  width: 1000px;

}
.header {
  position: relative;
}
.logo {
  width: 94px;
  height: 30px;
  position: absolute;
  top: 25px;
  left: 100px;
  background: url('../../assets/images/v2ex.png') no-repeat;
  background-size: 94px 30px;
}
.nav {
  width: auto;
  position: absolute;
  bottom: 0;
  left: 100px;
}
.post {
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 8px;
}
.post-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    margin: 10px 0px 10px 0px;
    padding: 0px;
}
.avatar {
    width: 70px;
    height: 70px;
    -moz-border-radius: 4px;
    border-radius: 4px
}
.post-author {
    color: gray;
}
.post-content {
    padding: 10px;
}
.replie {
    width: 800px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 8px;
}
</style>
