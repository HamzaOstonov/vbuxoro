//export const host = "http://localhost:3000";
//export const host = "http://192.168.1.2:3000";
export const host = document.location.origin;
export const region = host + "/getRegions";
export const district = host + "/getdistricts";
export const distr = host + "/getDistricts";
export const agent = host + "/getAgents";
export const deletes = host + "/deleteTable";
export const subdistrict = host + "/getSubdistricts";
export const subdistr = host + "/getsubdistricts";
export const client = host + "/getClients";
export const clients = host + "/getclients";
export const goods = host + "/getGoods";
export const moves = host + "/getMoves";
export const price = host + "/getPrice";
export const prices = host + "/getPrices";
export const pric = host + "/getprices";
export const general = host + "/getGeneral";
export const gen = host + "/getgeneral";
export const ord = host + "/gettalab";
export const income = host + "/";
export const dates = host + "/getDates";
export const saldo = host + "/repsaldo";
export const excel = host + "/repExcel";
export const serverget = async addr => (await fetch(addr)).json();
export const serverpost = async (addr, obj) =>
  (await fetch(addr, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(obj)
  })).json();
export const serverput = async (addr, obj) =>
  (await fetch(addr, {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(obj)
  })).json();
export const serverdel = async (addr, obj) =>
  (await fetch(addr, {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(obj)
  })).json();
