<template>
    <el-card shadow="always" class="post">
        <div slot="header" class="clearfix">
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
            <img class="avatar" v-bind:src="this.post.author.avatar" alt="avatar">
            <div class="container">
              <div class="post-prview">
                <a class="post-title" v-bind:href="this.post">{{ this.post.title }}</a>
              </div>
            </div>
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
        replies: ''
      }
    }
  },
  created: function () {
    // 获取热门主题下的信息
    this.$axios.get('api/topics/hot.json')
      .then((response) => {
        console.log(response.data)
        var topics = response.data
        this.post.title = topics[0].title
        this.post.url = topics[0].url
        this.replies = topics[0].replies
        this.post.author.avatar = topics[0].member.avatar_mini
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
  methods: {
    handlePostDetail () {

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
  color: #42b983;
}
.post {
  width: 800px;
  margin: 0 auto;
}
.avatar {
  width: 30px;
  height: 30px;
  float: left;
}
</style>
