package main.java.calc;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name="/Arithmetic", urlPatterns = {"/Arithmetic"})
public class Arithmetic extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        doGet(request, response);
        response.addHeader("content-type", "text/html");
        String num1 = parseNums(request.getParameter("num1"));
        String num2 = parseNums(request.getParameter("num2"));
        String submit = request.getParameter("submit");
        double results = 0.0;
        if (submit.equalsIgnoreCase("Add")){
            results = add(num1, num2);
        }
        String page =render(results+"");
        response.getWriter().write(page);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.addHeader("content-type", "text/html");
//        int num1 = 484;
//        int num2 = 58;
//        int res = num1+num2;
        response.getWriter().print(render(""));
        private String render(String result){
            String page=("<form method=\"post\">\n" +
                    "    <h3 style=\"border-bottom: 5px black double ;\">Arithmetic</h3>\n" +
                    "    <div>\n" +
                    "        <label>Num1</label>\n" +
                    "        <input type=\"text\" name=\"num1\" <=\"\" div=\"\">\n" +
                    "     <div>\n" +
                    "        <label>Num2</label>\n" +
                    "        <input type=\"password\" name=\"num2\" <=\"\" div=\"\">\n" +
                    "     <div>\n" +

                    "        <input type=\"submit\" value=\"Add\" name='submit'> <=\"\" div=\"\">\n" +
                    "        <input type=\"submit\" value=\"Multiply\" name='submit'>  <=\"\" div=\"\">\n" +
                    "        <input type=\"submit\" value=\"Divide\" name='submit'> <=\"\" div=\"\">\n" +
                    "     <div>\n" +
                    "        <label>Result</label>\n" +
                    "        <input type=\"text\" name=\"\" <=\"\" div=\"\">\n" +
                    "  \n" +
                    "        \n" +
                    "        </div></div></div></form>");

            return page;
        }
        private double add ( double num1, double num2){
            return num1+num2;
        }
        private double parseNums(String number){
            double num=0;
                    try{
                        num = Double.parseDouble(number);
                    }catch (NumberFormatException e);
            e.pr
        }
    }
}