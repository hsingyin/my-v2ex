<template>
    <el-container class="wrap">
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <ul>
          <el-card shadow="always" class="post" v-for=" item in postData" :key="item.id">
            <div slot="header" class="clearfix">
                <div class="container">
                  <div class="post-prview">
                    <img class="avatar" v-bind:src="item.member.avatar_mini" alt="avatar">
                    <a class="post-title" v-bind:href="item.url">{{ item.title }}</a>
                    <el-badge :value="item.replies" :max="999" class="replies-num">
                      <el-button>回帖</el-button>
                    </el-badge>
                    <a class="author" v-bind:href="item.member.url">{{ item.member.username }}</a>
                  </div>
                </div>
            </div>
            <div class="content clearfix">
              <el-button class="node-name" round size="small"># {{ item.node.title }}</el-button>
              <el-button class="post-detail" style="float: right;" type="text" @click="handlePostDetail">查看原帖</el-button>
            </div>
          </el-card>
        </ul>
      </el-main>
      <el-footer class="footer">footer</el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '主页',
      postData: {}
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
          this.postData = response.data
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
      // window.location.href = item.url
    },
    handleNode () {
      // window.location.href = this.item.node.url
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
.wrap {
  width: 1000px;
  margin: 0 auto;
  height: auto;
}
.main {
  width: 1000px;

}
.footer {
  background-color: #f7fbfd;
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
.el-badge__content {
  height: 30;
}
.el-card__body {
  padding: 0;
}
</style>
