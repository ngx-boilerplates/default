import config from './config';

describe('config', function(){

  it('should exist', function(){
    expect(config).to.be.an('object');
  });

  it('should contain the required keys', function(){
    expect(config.infoDirective).to.be.an('object');
    expect(config.infoDirective.name).to.be.a('string');
  });

});
