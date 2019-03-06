// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Passing data example
router.get('/examples/passing-data', function (req, res) {
  res.render('examples/passing-data/index')
});

// Branching example
router.post('/examples/branching/answer', function (req, res) {
  let nhsNumber = req.body.nhsNumber;

  if (nhsNumber === 'Yes') {
    res.redirect('/examples/branching/answer-yes')
  } else {
    res.redirect('/examples/branching/answer-no')
  }
});

// Branching example
router.post('/register-account/v1/get-your-security-code', function (req, res) {
  let answer = req.body.confirmEmail;

  if (answer === 'yes') {
    res.redirect('/register-account/v1/confirm-your-email')
  } else {
    res.redirect('/register-account/v1/tell-us-which-email-you-want-to-use')
  }
});

// Have you had a smart card?
router.post('/register-account/v1/details/smartcard', function (req, res) {
  let answer = req.body.hadSmartcard;

  if (answer === 'yes') {
    res.redirect('/register-account/v1/details/do-you-know-your-smartcard-number')
  } else {
    res.redirect('/register-account/v1/details/organisation')
  }
});

// Do you know your smartcard number?
router.post('/register-account/v1/details/do-you-know-your-smartcard-number', function (req, res) {
  let answer = req.body.knowSmartcard;

  if (answer === 'yes') {
    res.redirect('/register-account/v1/details/smartcard-number')
  } else {
    res.redirect('/register-account/v1/details/organisation')
  }
});

// Do you know your smartcard number?
router.post('/register-account/v1/details/your-organisation', function (req, res) {
  let answer = req.body.anotherOrg;

  if (answer === 'yes') {

    if ( req.session.data.ODS3 ) {
      res.redirect('/register-account/v1/details/org/4')
    } else if ( req.session.data.ODS2 ) {
      res.redirect('/register-account/v1/details/org/3')
    } else {
      res.redirect('/register-account/v1/details/org/2')
    }
  } else {
    res.redirect('/register-account/v1/details/choose-your-role')
  }
});


/////
// Register routes
/////

router.post('/register-account/v1/details/confirm-role', function (req, res) {
  let answer = req.body.confirmRole;

  if (answer === 'yes') {
    res.redirect('/register-account/v1/details/check-details')
  } else {
    res.redirect('/register-account/v1/details/choose-your-role')
  }
});


/////
// Add a role routes
/////

// Do you know your smartcard number?
router.post('/add-a-role/v1/confirm-role', function (req, res) {
  let answer = req.body.confirmRole;

  if (answer === 'yes') {
    res.redirect('/add-a-role/v1/check-details')
  } else {
    res.redirect('/add-a-role/v1/choose-role')
  }
});

// Is this your org?
router.post('/add-a-role/v1/confirm-org', function (req, res) {
  let answer = req.body.anotherOrg;

  if (answer === 'yes') {
    res.redirect('/add-a-role/v1/choose-role')
  } else {
    res.redirect('/add-a-role/v1/new-org/organisation')
  }
});

// Is this your org?
router.post('/add-a-role/v1/new-org/confirm-org', function (req, res) {
  let answer = req.body.anotherOrg;

  if (answer === 'yes') {
    res.redirect('/add-a-role/v1/choose-role')
  } else {
    res.redirect('/add-a-role/v1/new-org/organisation')
  }
});

router.post('/add-a-role/v1/service-role', function (req, res) {
  let answer = req.body.inServiceSelect;

  if (answer === '1') {
    res.redirect('/add-a-role/v1/need-permission')
  } else {
    res.redirect('/add-a-role/v1/get-a-new-role')
  }
});


//////
///  use a service
/////

router.post('/use-a-service/v1/success', function (req, res) {
  let answer = req.body.inServiceSelect;

  if (answer === '1') {
    res.redirect('/use-a-service/v1/end')
  } else {
    res.redirect('/add-a-role/v1/get-a-new-role')
  }
});


module.exports = router;
