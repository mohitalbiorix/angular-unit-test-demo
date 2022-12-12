describe('matchers in jasmin',()=>{
 
    beforeEach(()=>{
    
    })

    // toBe and toEqual
    it('toBe use only for prmitive',()=>{
        let a=10;
        let b=10;
        expect(a).toBe(b)

    })
    it('toEqual use for prmitive and non-primitive',()=>{
        let a=['10'];
        let b=['10'];
        expect(a).toEqual(b)

    })

    
})