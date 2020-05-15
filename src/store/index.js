import Vue from "vue";
import Vuex from "vuex";
import {
  //  serverget,
  //  deletes,
  serverpost //,
  //serverput,
  //serverdel
} from "@/const";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    articles: [],
    articlesCount: 0,
    clients: [],
    clientsCount: [],
    tabs: [
      {
        name: "actions",
        title: "Tovar harakati",
        active: true,
        path: "/"
      }
    ],
    regions: [],
    agents: [],
    districts: [],
    subdistr: [],
    goods: [],
    ware: [],
    prices: [],
    orders: [],
    clientorder: [],
    dates: []
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    articlesCount(state) {
      return state.articlesCount;
    },
    articles(state) {
      return state.articles;
    },
    clientsCount(state) {
      return state.clientsCount;
    },
    clients(state) {
      return state.clients;
    },
    Agents: state => {
      return state.agents;
    }
  },
  actions: {
    ["fetchArticles"]({ commit }, params) {
      commit("setLoading");
      var body1 = {};
      body1.pageno = params.filters.pageno;
      body1.pagerecords = params.filters.limit;
      body1.text = "%";
      return serverpost("http://localhost:3000/getGoods", body1).then(res => {
        if (!res.err) {
          if (res.data == null) {
            console.log("xatolik, res.data == null");
          } else {
            commit("setArticles", { 'data': res.data, 'tablepages': res.tablerecords });
          }
        } else {
          console.log("xatolik " + res.message);
        }
      });
    },
    ["fetchClients"]({ commit }, params) {
      commit("setLoading");
      var body1 = {};
      body1.pageno = params.filters.pageno;
      body1.pagerecords = params.filters.limit;
      body1.text = "%";
      return serverpost("http://localhost:3000/getClients", body1).then(res => {
        if (!res.err) {
          if (res.data == null) {
            console.log("xatolik, res.data == null");
          } else {
            commit("setClients", { 'data': res.data, 'tablepages': res.tablerecords });
          }
        } else {
          console.log("xatolik " + res.message);
        }
      });
    }
  },
  mutations: {
    ["setLoading"](state) {
      state.isLoading = true;
    },
    ["setArticles"](state, dat1) {
      state.articles = dat1.data;
      state.articlesCount = dat1.tablepages;
      state.isLoading = false;
    },
    ["setClients"](state, dat1) {
      state.clients = dat1.data;
      state.clientsCount = dat1.tablepages;
      state.isLoading = false;
    },
    setagents: (state, agents) => {
      state.agents = agents;
    },
    addagent: (state, agent) => {
      state.agents.unshift(agent);
    },
    updateagent: (state, agent) => {
      let i = state.agents.findIndex(el => el.id == agent.id);
      for (let j of Object.keys(state.agents[i])) {
        state.agents[i][j] = agent[j];
      }
    },
    deleteagent: (state, agent) => {
      let i = state.agents.findIndex(el => el.id == agent.id);
      state.agents.splice(i, 1);
    },
    setgoods: (state, good) => {
      state.goods = good;
    },
    addgood: (state, good) => {
      state.goods.unshift(good);
    },
    updategood: (state, good) => {
      let el = state.goods.find(item => item.id == good.id);
      el.name = good.name;
    },
    deletegood: (state, id) => {
      let i = state.goods.findIndex(el => el.id == id);
      state.goods.splice(i, 1);
    }
  }
}); 