<template>
  <b-container>
    <b-row class="mt-3">
      <b-col>
        <h2>Teste</h2>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-3">
      <b-col cols="4">
        <b-form @submit="onSubmit(event)" @reset="onReset" v-if="show">
          <b-form-group id="input-group-cep" label="CEP" label-for="input-cep">
            <b-form-input
              id="input-cep"
              v-model="form.CEP"
              type="text"
              placeholder="Ex: 00.000-000"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-button
            type="button"
            variant="primary"
            :disabled="disableButton.formSaveCEP"
            @click="onSubmit"
            >Salvar
            <b-spinner v-if="loading.formSaveCEP"></b-spinner>
          </b-button>
          <b-button
            type="button"
            @click="onReset"
            variant="danger"
            :disabled="disableButton.formResetCEP"
            >Limpar
            <b-spinner class="ml-2" v-show="loading.formResetCEP"
              >teste</b-spinner
            >
          </b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-3">
      <b-col cols="4">
        {{ user.address }}
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-3">
      <b-col cols="4">
        <img
          src="https://loja.retornar.com.br/wp-content/uploads/2020/02/logo-retornar.svg"
          alt="Logo Retornar"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Services from "../../services/Index.js";

export default {
  created() {
    Services.Util.changeTitle("HOME - Retornar Açai");
  },
  data: () => {
    return {
      disableButton: {
        formSaveCEP: false,
        formResetCEP: false,
      },
      form: {
        CEP: "",
      },
      loading: {
        formSaveCEP: false,
        formResetCEP: false,
      },
      show: true,
      user: {
        address: {},
      },
    };
  },
  methods: {
    async getCEP(cep) {
      let result = await Services.Util.getCEP(cep);
      if (result == undefined) {
        Services.Util.makeAToast(
          this,
          "Ops, endereço não encontrado!",
          "warning",
          "top-right",
          2000
        );
      } else if (result.status == 200) {
        Services.Util.makeAToast(
          this,
          "Endereço encontrado!",
          "success",
          "top-right",
          2000
        );
        this.user.address = result.data;
      } else {
        Services.Util.makeAToast(
          this,
          "Ops, endereço não encontrado!",
          "warning",
          "top-right",
          2000
        );
      }
    },
    onSubmit() {
      this.disableButton.formSaveCEP = true;
      this.loading.formSaveCEP = true;
      setTimeout(() => {
        this.getCEP(this.form.CEP);
        this.disableButton.formSaveCEP = false;
        this.loading.formSaveCEP = false;
      }, 2000);
    },
    onReset() {
      this.disableButton.formResetCEP = true;
      this.loading.formResetCEP = true;
      setTimeout(() => {
        this.form.CEP = "";
        Services.Util.makeAToast(
          this,
          "Usuário limpo com sucesso!",
          "success",
          "top-right",
          2000
        );
        this.disableButton.formResetCEP = false;
        this.loading.formResetCEP = false;
      }, 2000);
    },
  },
  name: "Home",
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}
</style>