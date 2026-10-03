Pod::Spec.new do |s|
  s.name = 'VictoryCodeSDK'
  s.ios.deployment_target = '13.0'
  s.osx.deployment_target = '10.15'
  s.tvos.deployment_target = '13.0'
  s.watchos.deployment_target = '6.0'
  s.version = '0.1.0'
  s.source = { :git => 'git@github.com:OpenAPITools/openapi-generator.git', :tag => 'v1.0.0' }
  s.authors = 'OpenAPI Generator'
  s.license = MIT
  s.homepage = 'https://github.com/victory-code-ai/victorycode-sdks'
  s.summary = 'Victory Code API client for Swift'
  s.source_files = 'Sources/VictoryCodeSDK/**/*.swift'
end
