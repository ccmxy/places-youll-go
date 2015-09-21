
describe('bottlesOfBeerForScripts', function() {
  it("0 bottles comes out right", function() {
    expect(bottlesOfBeerForScripts(0)).to.equal("No more bottles of beer on the wall,"+
    " no more bottles of beer. Go to the store and buy some more, "+
    " 99 bottles of beer on the wall.");
  });

  it("2 bottles comes out right", function() {
    expect(bottlesOfBeerForScripts(2)).to.equal("\n2 bottles of beer on the wall,"+
    " 2 bottles of beeer.... take one down, pass it around,"+
    "\n1 bottles of beer on the wall!\n1 bottles of beer on the wall,"+
    " 1 bottles of beeer.... take one down, pass it around,\n0 bottles of beer on the wall!No more bottles of beer on the wall, no more bottles of beer."+
    " Go to the store and buy some more,  99 bottles of beer on the wall.");
  });
});
