<template>
  <div id="paging" class="pagination">
    <a href="#" id="paging_first" @click="first();" class="dv">
      <div>&larr;</div>
    </a>
    <a href="#" id="paging_prior" @click="prior();" class="dv">
      <div>&laquo;</div>
    </a>
    <a href="#" style="padding: 2px 2px;">
      <input
        type="text"
        id="paging_input_cur"
        :value="currentPage"
        @keyup="keyUpCurrent($event)"
        @blur="blurCurrent($event)"
        style="width: 40px; size: 3; padding: 1px 1px; line-height:22px;"
      />
    </a>
    <a href="#" class="dv">
      <div>/</div>
    </a>
    <a href="#" class="dv">
      <div>{{pages.length}}</div>
    </a>
    <a href="#" id="paging_next" @click="next();" class="dv">
      <div>&raquo;</div>
    </a>
    <a href="#" id="paging_last" @click="last();" class="dv">
      <div>&rarr;</div>
    </a>
    <input type="hidden" id="page_cur_hidden" name="page_cur_hidden" value="1" />
    <a href="#" id="btnNewRow" class="icn" title="Янги..." onclick="insNewRow();">
      <input type="image" src="./img/add-512.png" />
    </a>
    <a href="#" class="icn" title="Excelга олиш..." onclick="loadToExcel();">
      <input type="image" src="./img/excel-375.png" />
    </a>
    <a href id="aloadexcel" style="display:none"></a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    first() {
      if (this.currentPage <= 1) return;
      this.$emit("update:currentPage", 1);
    },
    prior() {
      if (this.currentPage <= 1) return;
      this.$emit("update:currentPage", this.currentPage - 1);
    },
    next() {
      if (this.currentPage >= this.pages.length) return;
      this.$emit("update:currentPage", this.currentPage + 1);
    },
    last() {
      if (this.currentPage >= this.pages.length) return;
      this.$emit("update:currentPage", this.pages.length);
    },
    changePage(goToPage) {
      if (goToPage === this.currentPage) return;
      this.$emit("update:currentPage", goToPage);
    },
    paginationClass(page) {
      return {
        "page-item": true,
        active: this.currentPage === page
      };
    },
    keyUpCurrent(event) {
      if (event.keyCode === 13) {
        this.changePage(parseInt(event.target.value));
      }
    },
    blurCurrent(event) {
      this.changePage(parseInt(event.target.value));
    }
  },
  watch: {},
  computed: {
  }
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 4px 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
