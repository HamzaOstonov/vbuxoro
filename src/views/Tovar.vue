<template>
  <div>
    <div id="third1">
      <h1 style="padding-top: 20px; padding-left: 20px;">
        <p id="sprCaption">Tovarlar</p>
      </h1>
      <span id="spnErrSpr" style="color:red"></span>
    </div>
    <div id="third2">
      <Pagination :pages="pages" :currentPage.sync="currentPage" />
    </div>

    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">No articles are here... yet.</div>
      <div id="third3">
        <table id="sprTable" class="sprTableClass">
          <caption></caption>
          <thead>
            <tr>
              <th>т.р</th>
              <th>Номи</th>
              <th>Изох(примечание)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(agent, i) in articles" :key="i">
              <td width="50">{{ i + 1 }}</td>
              <td width="400">{{ agent.name }}</td>
              <td width="400">{{ agent.notes }}</td>
              <td>
                  <i class="m-icon flat-round primary" @click="edit(agent)"
                  >edit</i
                >
                <i class="m-icon flat-round danger" @click="Delete(agent)"
                  >delete</i
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import //  serverget,
//  deletes,
//serverpost //,
//serverput,
//serverdel
"@/const";
import Pagination from "@/components/Pagination";

export default {
  name: "Goods",
  components: { Pagination },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 3
    }
  },
  data() {
    return {
      //goods: []
      show: false,
      active: false,
      selected: "",
      form: {},
      currentPage: 1
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage,
        pageno: this.currentPage
      };
      if (this.author) {
        filters.author = this.author;
      }
      if (this.tag) {
        filters.tag = this.tag;
      }
      if (this.favorited) {
        filters.favorited = this.favorited;
      }
      return {
        type,
        filters
      };
    },
    pages() {
      if (this.isLoading || this.articlesCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.articlesCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["articlesCount", "isLoading", "articles"])
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.listConfig.filters.pageno = newValue;
      console.log("wattttchhh");
      this.fetchArticles();
    },
    type() {
      this.resetPagination();
      this.fetchArticles();
    },
    author() {
      this.resetPagination();
      this.fetchArticles();
    },
    tag() {
      this.resetPagination();
      this.fetchArticles();
    },
    favorited() {
      this.resetPagination();
      this.fetchArticles();
    }
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    nextMethod() {
      alert("parent");
    },
    fetchArticles() {
      this.$store.dispatch("fetchArticles", this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    }
  },
  created() {}
};
</script>

<style scoped>
#sprTable,
#tovarTable,
#zakazTable,
.tTableClass {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#sprTable td,
#sprTable th,
#zakazTable tr.h th,
#tovarTable td,
#tovarTable th {
  border: 1px solid rgb(85, 75, 75);
  padding: 4px;
}

#sprTable tr:nth-child(even),
#tovarTable tr:nth-child(even),
#zakazTable tr:nth-child(even) {
  background-color: #d1dedf;
}

#sprTable tr:hover,
#tovarTable tr:hover,
#zakazTable tr:hover {
  background-color: #ddd;
}

#sprTable th,
#tovarTable th,
#zakazTable tr.h th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>