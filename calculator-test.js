
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

it("should have a terribly low interest rate", function() {
  const values = {
    amount: 10000,
    years: 60,
    rate: 1
  };
  expect(calculateMonthlyPayment(values)).toEqual('18.48');
});

it("should handle terribly long terms in Years", function() {
  const values = {
    amount: 10000,
    years: 10000,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('50.00');
});
/// etc
