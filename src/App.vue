<template>
  <v-app>
    <Navbar />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
// @ is an alias to /src
import Toolbar from "@/components/Toolbar";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Toolbar, Navbar },
  data() {
    return {
      drawer: true
    };
  },
  created() {
    /*console.log(this.$route.path);
    console.log(this.$vuetify.application.top);
    console.log(this.$vuetify.application.bar);
    console.log(this.$vuetify.application.bottom);
    console.log(this.$vuetify.application.footer);
    console.log(this.$vuetify.application.footerInset);
    console.log(this.$vuetify.application.left);
    console.log(this.$vuetify.application.right);
    console.log(this.$vuetify.application.top);
    console.log(this.$vuetify.breakpoint.smAndDown);*/
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
