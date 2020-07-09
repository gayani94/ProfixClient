<template>
     <div>
    <md-table v-model="historyList" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Order History</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
         <md-table-cell md-label="ClOrdID" md-numeric><md-button  @click='viewOrderDetails(item)' class="md-raised md-accent" style="background-color:#ff5252">{{ item.ClOrdID }}</md-button></md-table-cell>
        <md-table-cell md-label="OrigClOrdID" md-sort-by="OrigClOrdID">{{ item.OrigClOrdID }}</md-table-cell>
        <md-table-cell md-label="MsgType" md-sort-by="MsgType">{{ item.MsgType }}</md-table-cell>
        <md-table-cell md-label="Symbol" md-sort-by="Symbol">{{ item.Symbol }}</md-table-cell>
        <md-table-cell md-label="OrdType" md-sort-by="OrdType">{{ item.OrdType }}</md-table-cell>
        <md-table-cell md-label="HandlInst" md-sort-by="HandlInst">{{ item.HandlInst }}</md-table-cell>
        <md-table-cell md-label="Side" md-sort-by="Side">{{ item.Side }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
        <md-table-cell md-label="Currency" md-sort-by="Currency">{{ item.Currency }}</md-table-cell>
        <md-table-cell md-label="TransactTime" md-sort-by="TransactTime">{{ item.TransactTime }}</md-table-cell>
  
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

import axios from "axios";
export default {
    data(){
        return {
            historyList : []
        };
    },
    async created(){
        try{
            const res = await axios.get('http://localhost:3000/historyList');
            this.historyList = res.data;

          //  console.log(this.historyList[0].ClietOrdID);
        } catch(e){
console.log(e);
        }
    },
  methods: {
    viewOrderDetails: function(index) {
      console.log(index);
      this.$router.push({name: 'order-detail', params: { id: index }});
      
    }
  }

}


 



</script>