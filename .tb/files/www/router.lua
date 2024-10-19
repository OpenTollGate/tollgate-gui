
local uri = os.getenv("REQUEST_URI")
local filepath = "/www/tollgate" .. uri

local file = io.open(filepath, "r")

if file then
    local content = file:read("*a")
    file:close()

    local extension = filepath:match("^.+(%..+)$")
    local content_type = "text/plain"

    if extension == ".html" then
        content_type = "text/html"
    elseif extension == ".css" then
        content_type = "text/css"
    elseif extension == ".js" then
        content_type = "application/javascript"
    elseif extension == ".json" then
        content_type = "application/json"
    end

    print("HTTP/1.0 200 OK\r\nContent-Type: " .. content_type .. "\r\n\r\n" .. content)
else
    local index_file = io.open("/www/tollgate/index.html", "r")
    if index_file then
        local content = index_file:read("*a")
        index_file:close()
        print("HTTP/1.0 200 OK\r\nContent-Type: text/html\r\n\r\n" .. content)
    else
        print("HTTP/1.0 404 Not Found\r\n\r\n")
    end
end
