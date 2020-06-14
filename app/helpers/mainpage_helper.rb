module MainpageHelper
    def generate_title(name, id)
            "<h1 class='text-left ml-5' id='#{id}'>"+
                "<span>" +
                    "#{name} #{link_to "#", anchor: "#{id}"}" +
                "</span>" +
            "</h1>"
    end
end

