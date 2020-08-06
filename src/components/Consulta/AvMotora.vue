<template>
  <table class="table table-sm table-borderless">
    <thead>
      <tr>
        <th class="text-center"></th>
        <th class="text-center">OD</th>
        <th class="text-center">OE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kappa</td>
        <td>
          <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input size="sm"></b-input>
          </b-input-group>
        </td>
        <td>
          <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input size="sm"></b-input>
          </b-input-group>
        </td>
      </tr>
      <tr>
        <td>Hirschberg</td>
        <td colspan="2">
          <textarea name="ava_mot_hir" size="sm" id="c_ava_mot_hir" class="form-control"></textarea>
        </td>
      </tr>
      <tr>
        <td>Ducções</td>
        <td>
          <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input size="sm"></b-input>
          </b-input-group>
        </td>
        <td>
          <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input size="sm"></b-input>
          </b-input-group>
        </td>
      </tr>
      <tr>
        <td>Versões</td>
        <td>
          <div class="row">
            <div class="ml-4">
              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted1"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted2"></b-form-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="mr-5">
              <b-form-checkbox id="checkbox-3" name="checkbox-3" value="accepted3"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-4" name="checkbox-4" value="accepted4"></b-form-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="ml-4">
              <b-form-checkbox id="checkbox-5" name="checkbox-5" value="accepted5"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-6" name="checkbox-6" value="accepted6"></b-form-checkbox>
            </div>
          </div>
        </td>
        <td>
          <div class="row">
            <div class="ml-4">
              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted1"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted2"></b-form-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="mr-5">
              <b-form-checkbox id="checkbox-3" name="checkbox-3" value="accepted3"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-4" name="checkbox-4" value="accepted4"></b-form-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="ml-4">
              <b-form-checkbox id="checkbox-5" name="checkbox-5" value="accepted5"></b-form-checkbox>
            </div>
            <div>
              <b-form-checkbox id="checkbox-6" name="checkbox-6" value="accepted6"></b-form-checkbox>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style>
input[type="range"][orient="vertical"] {
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 8px;
  height: 175px;
  padding: 0 5px;
}
</style>