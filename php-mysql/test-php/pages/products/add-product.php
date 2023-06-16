<form action="./products/save-product.php" method="post">
    <div class="class100">
        <label for="designation">Désignation </label>
        <input type="text" id="designation" name="designation">
    </div>

    <div class="class100">
        <label for="description">Description : </label>
        <input type="text" id="description" name="description">
    </div>

    <div class="class100">
        <label for="price">Prix Unitaire : </label>
        <input type="text" id="price" name="price">
    </div>

    <div class="class100">
        <label for="stock">Stock actuel : </label>
        <input type="number" id="stock" name="stock">
    </div>

    <div class="class100">
        <button type="submit" name="productSubmit">
            Enregistrer produit
        </button>
    </div>
</form>