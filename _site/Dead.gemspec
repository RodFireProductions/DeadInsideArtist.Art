Gem::Specification.new do |spec|
  spec.name                    = "dead-jekyll"
  spec.version                 = "0.0.0"
  spec.authors                 = ["RodFireProductions"]

  spec.summary                 = %q{Rodrick's Personal Theme}
  spec.homepage                = "https://github.com/RodFireProductions/Dead"
  spec.license                 = "MIT"

  spec.files         = {}

  spec.metadata      = {}

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"
  spec.add_runtime_dependency "kramdown", "~> 2.3.1"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
