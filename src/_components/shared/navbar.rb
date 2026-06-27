class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:)
    @metadata, @resource = metadata, resource
  end

  def active?(path)
    @resource.relative_url.start_with?(Bridgetown::Current.site.base_path + path)
  end
end
