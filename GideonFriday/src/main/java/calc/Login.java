package main.java.calc;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name="/Login", urlPatterns = {"/Login"})
public class Login extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if(username.equalsIgnoreCase("user1")&&password.equals("pwd")){
//            RequestDispatcher rd = request.getRequestDispatcher("Arithmetic");
//            rd.forward(request, response);
            response.sendRedirect("Arithmetic");
        }
        else
            doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.addHeader("content-type", "text/html");
        response.getWriter().print("<form method=\"post\">\n" +
                "    <h3 style=\"border-bottom: 5px black double width: 30;\">LOGIN</h3>\n" +
                "    <div>\n" +
                "        <label>Username</label>\n" +
                "        <input type=\"text\" name=\"username\" <=\"\" div=\"\">\n" +
                "     <div>\n" +
                "        <label>Password</label>\n" +
                "        <input type=\"password\" name=\"password\" <=\"\" div=\"\">\n" +
                "     <div>\n" +
                "        <label></label>\n" +
                "        <input type=\"submit\" name=\"Submit\" <=\"\" div=\"\">\n" +
                "  \n" +
                "        \n" +
                "        </div></div></div></form>");

    }
}
