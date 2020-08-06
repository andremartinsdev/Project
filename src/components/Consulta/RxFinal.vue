<template>
  <div class="panel-body">
<div class="row">
<div class="col-md-12">
<table class="table">
<thead>
<tr>
<th class="text-center"></th>
<th class="text-center">Esférico</th>
<th class="text-center">Cilíndrico</th>
<th class="text-center">Eixo</th>
<th class="text-center">AV</th>
</tr>
</thead>
<tbody>
<tr>
<td>OD</td>
<td><b-input type="number" size="sm" class="form-control num" step="0.25"/></td>
<td><b-input type="number" size="sm" class="form-control num" step="0.25" max="0"/></td>
<td><b-input type="number" size="sm" class="form-control" step="5" min="0" max="360"/></td>
<td><b-input type="number" size="sm" class="form-control num" step="1"/></td>
</tr>
<tr>
<td>OE</td>
<td><b-input type="number" size="sm" class="form-control num" step="0.25"/></td>
<td><b-input type="number" size="sm" class="form-control num" step="0.25" max="0"/></td>
<td><b-input type="number" size="sm" class="form-control" step="5" min="0" max="360"/></td>
<td><b-input type="number" size="sm" class="form-control num" step="1"/></td>
</tr> 
<tr>
<td>Adição</td> 
<td colspan="2"><b-input type="text" size="sm" class="form-control"/></td>
<td>AV. Perto</td>
<td><b-input type="text" size="sm" class="form-control"/></td>
</tr>
</tbody>
</table>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="c_rx_fin_tip_len">Tipo lente</label>
<textarea name="rx_fin_tip_len" id="c_rx_fin_tip_len" class="form-control"></textarea>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
 <label for="c_rx_fin_tra">Tratamento</label>
<textarea name="rx_fin_tra" id="c_rx_fin_tra" class="form-control"></textarea>
</div>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>