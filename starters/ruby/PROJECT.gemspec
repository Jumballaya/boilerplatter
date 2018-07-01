# coding: utf-8

lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name = "PROJECT"
  spec.version = "0.0.1"
  spec.authors = ["Author Name"]
  spec.email = ["author@email.com"]
  spec.summary = %q{Short summary of the project}
  spec.description = %q{Longer description of the project}
  spec.homepage = "http://domain.tld"
  spec.license = "MIT"

  spec.files = ["lib/PROJECT.rb"]
  spec.executables = ["bin/PROJECT"]
  spec.test_files = ["tests/test_PROJECT.rb"]
  spec.require_paths = ["lib"]
end
