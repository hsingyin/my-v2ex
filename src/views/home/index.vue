<template>
    <el-container class="wrap">
      <el-header class="header" height="120px">
        <div class="logo"></div>
        <el-breadcrumb separator="/" class="nav">
          <el-breadcrumb-item><a @click="getHotList">最热</a></el-breadcrumb-item>
          <el-breadcrumb-item><a @click="getLatestList">最新</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/nodes">节点</a></el-breadcrumb-item>
          <!-- <el-breadcrumb-item><a href="/">关于</a></el-breadcrumb-item> -->
        </el-breadcrumb>
      </el-header>
      <el-main class="main" v-loading="loading">
        <ul>
          <post v-for=" postData in posts" :key="postData.id" :postData="postData"></post>
        </ul>
      </el-main>
      <el-footer class="footer">
        <div class="copyright"><a href="https://github.com/hsingyin">@hsingyin </a></div>
        <small class="slogan">♥ Do have faith in what you're doing.</small>
      </el-footer>
    </el-container>
</template>

<script>
import Post from '@/components/Post'

export default {
  name: 'home',
  components: {
    'post': Post
  },
  data () {
    return {
      msg: '主页',
      posts: {},
      loading: true
    }
  },
  created: function () {
    // 默认获取最火信息
    this.getHotList()
  },
  methods: {
    getHotList () {
    // 获取热门主题下的信息
      this.$axios.get('api/topics/hot.json')
        .then((response) => {
          console.log(response.data)
          this.posts = response.data
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getLatestList () {
    // 获取最新主题下的信息
      this.$axios.get('api/topics/latest.json')
        .then((response) => {
          console.log(response.data)
          this.posts = response.data
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
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
  min-height: 500px;
}
.header {
  position: relative;
}
.logo {
  width: 94px;
  height: 30px;
  /* margin-top: 25px;
  margin-left: 80px; */
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
.footer {
  position: relative;
}
.copyright {
  position: absolute;
  left: 100px;
}
.slogan {
  position: absolute;
  left: 100px;
  top: 30px;
  color: gray;
}
</style>
