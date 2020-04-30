module MainpageHelper
    def generate_title(name, id)
            "<h1 class='text-left' id='#{id}'>"+
                "<span>" +
                    "#{name} #{link_to "#", "#{id}"}" +
                "</span>" +
            "</h1>"
    end
end

