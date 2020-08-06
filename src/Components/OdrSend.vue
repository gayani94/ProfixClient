<template>
     <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12">
            <h1>ProFix</h1>
            <hr>

            <div class="form-group">
              <label for="Session">Session</label>
              <select class="form-control" id="Session" v-model="formdata.Session" >
                <option v-for="(Session,index) in sessions" :key="index">{{ Session.name }}</option>
              </select>
            </div>
          </div>
        </div>

        
  <div style="width:60%">
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>Tag Name</md-table-head>
        <md-table-head>Tag Number</md-table-head>
        <md-table-head>Tag Value</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>ClientOrdID</md-table-cell>
        <md-table-cell>11</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="ClOrdID" v-model="formdata.ClOrdID"></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>OrigClOrdID</md-table-cell>
        <md-table-cell>41</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="OrigClOrdID" v-model="formdata.OrigClOrdID"></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>MsgType</md-table-cell>
        <md-table-cell>35</md-table-cell>
        <md-table-cell><select class="form-control" id="MsgType" v-model="formdata.MsgType">
                <option v-for="(MsgType,index) in MsgType" :key="index">{{ MsgType }}</option>
              </select></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>Symbol</md-table-cell>
        <md-table-cell>55</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="Symbol" v-model="formdata.Symbol"></md-table-cell>
      </md-table-row>

     <md-table-row>
        <md-table-cell md-numeric>OrdType</md-table-cell>
        <md-table-cell>40</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="OrdType" v-model="formdata.OrdType"></md-table-cell>
      </md-table-row>
     
     <md-table-row>
        <md-table-cell md-numeric>HandlInst</md-table-cell>
        <md-table-cell>21</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="HandlInst" v-model="formdata.HandlInst"></md-table-cell>
      </md-table-row>
     
     <md-table-row>
        <md-table-cell md-numeric>Side</md-table-cell>
        <md-table-cell>54</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="Side" v-model="formdata.Side"></md-table-cell>
      </md-table-row>
     
     
      <md-table-row>
        <md-table-cell md-numeric>OrderQty</md-table-cell>
        <md-table-cell>38</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="OrderQty" v-model="formdata.OrderQty"></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>Price</md-table-cell>
        <md-table-cell>44</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="Price" v-model="formdata.Price"></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>Currency</md-table-cell>
        <md-table-cell>15</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="Currency" v-model="formdata.Currency"></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>TransactTime</md-table-cell>
        <md-table-cell>60</md-table-cell>
        <md-table-cell><input type="text" class="form-control" id="TransactTime" v-model="formdata.TransactTime"></md-table-cell>
      </md-table-row>
    </md-table>
  </div>

  <button class="btn btn-primary" style="width: 150px" @click.prevent="submitForm">Send</button>
      </form>

    <div  style="margin-top: 20px;">
      <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title"><span id="resultText"></span></div>
        </md-card-header-text>
      </md-card-header>

    </md-card>
    </div>
      
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {

    let sessionData = {};
    const res = axios
      .get("http://localhost:8080/HelloJercey/rest/sessions")
      .then(data => {
        console.log(data.data);
        sessionData = data.data;
        console.log(sessionData);

        formattedJson.sessions = sessionData;
        
      })
      .catch(error => {
        console.log(error);
      });
    let formattedJson = {
      sessions: [],

      MsgType: ["D", "G", "F"],
      formdata: {
        ClOrdID : 'FIX_TEST_01',
        OrigClOrdID : '',
        MsgType : 'D',
        Symbol : '7272',
        OrdType : '1',
        HandlInst : '3',
        Side : '1',
        OrderQty : '1000',
        Price : '1000',
        Currency : 'JPY',
        TransactTime : '20200623-15:35:00:00'
      }
    };

    formattedJson.sessions = sessionData;
    console.log(sessionData);
    return formattedJson;
  },
  methods: {
    submitForm() {

      var url = 'http://localhost:8080/HelloJercey/rest/order';
      
      if(this.formdata.MsgType == 'G' ){
        this.formdata.OrigClOrdID = this.formdata.ClOrdID;
        this.formdata.ClOrdID = this.formdata.ClOrdID + '_A'


        url = 'http://localhost:8080/HelloJercey/rest/order/'+this.formdata.OrigClOrdID+'/messages';
      }

      var resultText = '11 = '+this.formdata.ClOrdID+', 35 ='+this.formdata.MsgType+', 55 = '+this.formdata.Symbol+', 40 ='+this.formdata.OrdType+', 21 ='+this.formdata.HandlInst+', 54 = '+this.formdata.Side+', 38 = '+this.formdata.OrderQty+', 44 = '+this.formdata.Price+', 15 = '+this.formdata.Currency+', 60 = '+this.formdata.TransactTime+'';

      document.getElementById('resultText').innerHTML = resultText;

      let rJson = JSON.stringify(this.formdata);
      console.log(rJson);
      console.log(JSON.parse(rJson));
 
      axios
      .post(url,rJson, {headers: {'Content-Type': 'application/json'}})
      .then(data => {
        console.log(data.data);
        console.log("Working!!!!");
      })
      .catch(error => {
        console.log(error);
      });

      axios.post('http://localhost:3000/historyList',JSON.parse(rJson)).then(data => {
        console.log('Working!!!');
      })
      .catch(error => {
        console.log(error);
      });


    }
  }
};
</script>


<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>