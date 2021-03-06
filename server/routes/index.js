const { Router } = require('express');

const router = Router();

const {
  getProducts,
  getProduct,
  getCategories,
  getCategoryProducts,
  getProdcutSearch,
} = require('../api');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    text: 'Hi man :)',
  });
});

// products
router.get('/products', async (req, res) => {
  try {
    const { data } = await getProducts();

    res.json({ ...data, error: false });
  } catch (err) {
    res.json({
      error: true,
      err,
    });
  }
});

// search products
router.get('/products/search', async (req, res) => {
  try {
    const { data } = await getProdcutSearch(req.query.q);
    res.json({ ...data, error: false });
  } catch (err) {
    res.json({ error: true, err });
  }
});

// categories
router.get('/products/categories', async (req, res) => {
  try {
    const { data } = await getCategories();

    res.json({ categories: data, error: false });
  } catch (err) {
    res.json({ error: true, err });
  }
});

// products of a category
router.get('/products/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const { data } = await getCategoryProducts(category);

    res.json({ ...data, error: false });
  } catch (err) {
    res.json({ error: true, err });
  }
});

// product details
router.get('/products/:id', async (req, res) => {
  const productID = req.params.id;
  try {
    const { data } = await getProduct(productID);

    res.json({ ...data, error: false });
  } catch (err) {
    res.json({ error: true, err });
  }
});

module.exports = router;
