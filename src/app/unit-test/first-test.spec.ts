describe('my first test',()=>{
    let sut:any;
    beforeEach(()=>{
     sut = {}   
    })

    it('should be true if true',()=>{
        // arrange
        sut.a = false;
        //act use
        // sut.a = true;
        // assert
        expect(sut.a).toBe(true)

    })
})