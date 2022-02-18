template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <div class="row register-page">
          <div class="error">{{ errorMessage }}</div>
          <form class="col s12" id="reg-form">
            <div class="row">
              <div class="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  class="validate"
                  v-model="lastName"
                  required
                />
                <label for="last_name">姓</label>
              </div>
              <div class="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  class="validate"
                  v-model="firstName"
                  required
                />
                <label for="first_name">名</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  v-model="mailAddress"
                  required
                />
                <label for="email">メールアドレス</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  minlength="8"
                  v-model="password"
                  required
                />
                <label for="password">パスワード</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <button
                  class="btn btn-large btn-register waves-effect waves-light"
                  v-on:click="registerAdmin"
                  type="button"
                >
                  登録
                  <i class="material-icons right">done</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer">
          <div class="footer-center">©️ xxx Inc.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class RegisterAdmin extends Vue {
  //エラーメッセージ
  private errorMessage = "";
  //姓
  private lastName = "";
  //名
  private firstName = "";
  //メールアドレス
  private mailAddress = "";
  //パスワード
  private password = "";

  /**
   * 管理者情報を登録する.
   * @returns プロミスオブジェクト
   */
  async registerAdmin(): Promise<void> {
    if( this.lastName === ""){
      alert("エラーメッセージ: 性が入力されていません。")
      return;
    }
    if( this.firstName === ""){
      alert("エラーメッセージ: 名が入力されていません。")
      return;
    }
    if( this.mailAddress === ""){
      alert("エラーメッセージ: メールアドレスが入力されていません。")
      return;
    }
    if( this.password === ""){
      alert("エラーメッセージ: パスワードが入力されていません。")
      return;
    }
    const res = await axios.post(
      "http://153.127.48.168:8080/ex-emp-api/insert",
      {
        name: this.lastName + " " + this.firstName,
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    if (res.data.status === "success") {
      console.log(res);
      this.$router.push("/loginAdmin");
    } else {
      console.log(res);
      this.errorMessage = res.data.message;
      alert("エラーメッセージ:" + this.errorMessage);
    }
  }
}
</script>

<style scoped>
.register-page {
  width: 600px;
}
</style>
