<template>
    <el-card shadow="always" class="post">
        <div slot="header" class="clearfix">
            <div class="container">
              <div class="post-prview">
                <img class="avatar" v-bind:src="this.post.author.avatar" alt="avatar">
                <a class="post-title" v-bind:href="this.post.url">{{ this.post.title }}</a>
                <el-badge :value="this.post.replies" :max="999" class="item">
                  <el-button>回帖</el-button>
                </el-badge>
                <a class="author" v-bind:href="this.post">{{ this.post.author.userName }}</a>
              </div>
            </div>
        </div>
        <div class="content clearfix">
          <el-button style="float: right;" type="text" @click="handlePostDetail">查看原帖</el-button>
        </div>
    </el-card>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '主页',
      post: {
        title: '',
        url: '',
        author: {
          userName: '',
          avatar: '',
          url: ''
        },
        replies: 0
      }
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList () {
    // 获取热门主题下的信息
      this.$axios.get('api/topics/hot.json')
        .then((response) => {
          console.log(response.data)
          var topics = response.data
          this.post.title = topics[0].title
          this.post.url = topics[0].url
          this.post.replies = topics[0].replies
          this.post.author.userName = topics[0].member.username
          this.post.author.avatar = topics[0].member.avatar_mini
          // this.changeLargeAvatar(topics[0].member.avatar_mini)
        })
        .catch((error) => {
          console.log(error)
        })
    // 获取热门回复
    // this.$axios.get('api/replies/show.json', {
    //   params: {
    //     topic_id: 477835
    //   }
    // }).then((response) => {
    //   console.log(response.data)
    // }).catch((error) => {
    //   console.log(error)
    // })
    },
    handlePostDetail () {
      window.location.href = this.post.url
    },
    changeLargeAvatar (url) {
      console.log('传入的url' + url)
      let newURL = url.replace('/mini/g', 'large')
      console.log('新的url' + newURL)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.post {
  width: 800px;
  margin: 0 auto;
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
  float: left;
}
.author {
  padding-left: 10px;
  color: black;
  float: left;
}
.item {
  width: 50px;
  height: 30px;
  margin-right: 18px;
  float: right;
}
.el-badge__content {
  height: 30;
}
</style>
