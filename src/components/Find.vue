<template>
  <div id="paging" class="pagination">
   <ham class="box">
<input type="text" id="inpFilter" class="my-input" name="inpFilter" value="" size="50"
    maxlength="50" oninput="onInputFilter();"> 
</ham>
<ham class="box">
<input type="button" class="my-input-button" id="btnFilter" value="Куриш(Излаш)"
    onclick="filterButton();" />
</ham>

  </div>
</template>

<script>
export default {
  name: "Find",
  props: {
    filterStr: {
      type: String,
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
