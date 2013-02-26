package backbone;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BackboneProducts extends HttpServlet {

		/**
		 * Constructor of the object.
		 */
		public BackboneProducts() {
			super();
		}

		/**
		 * Destruction of the servlet. <br>
		 */
		public void destroy() {
			super.destroy(); // Just puts "destroy" string in log
			// Put your code here
		}

		/**
		 * The doGet method of the servlet. <br>
		 *
		 * This method is called when a form has its tag value method equals to get.
		 * 
		 * @param request the request send by the client to the server
		 * @param response the response send by the server to the client
		 * @throws ServletException if an error occurred
		 * @throws IOException if an error occurred
		 */
		public void doGet(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {

			response.setContentType("application/json");
			
			PrintWriter out = response.getWriter();
			out.println("[{\"id\":1,\"name\":\"camera1\",\"image\":\"product_1.jpg\",\"desc\":\"hello,boy_1\"},{\"id\":2, \"name\":\"camera2\",\"image\":\"product_2.jpg\",\"desc\":\"hello,boy_2\"},{\"id\":3, \"name\":\"camera3\",\"image\":\"product_3.jpg\",\"desc\":\"hello,boy_3\"},{\"id\":4, \"name\":\"camera4\",\"image\":\"product_4.jpg\",\"desc\":\"hello,boy_4\"},{\"id\":5, \"name\":\"camera5\",\"image\":\"product_5.jpg\",\"desc\":\"hello,boy_5\"}]");
			//out.println("[{id:'1',name:'camera1',image:'product_1.jpg',desc:'hello,boy_1'},{id:2, name:'camera2',image:'product_2.jpg',desc:'hello,boy_2'},{id:3, name:'camera3',image:'product_3.jpg',desc:'hello,boy_3'},{id:4, name:'camera4',image:'product_4.jpg',desc:'hello,boy_4'},{id:5, name:'camera5',image:'product_5.jpg',desc:'hello,boy_5'}]");
			//out.println("[{'id':'1',name:'camera1',image:'product_1.jpg',desc:'hello,boy_1'},{'id':2', name:'camera2',image:'product_2.jpg',desc:'hello,boy_2'},{'id':'3', name:'camera3',image:'product_3.jpg',desc:'hello,boy_3'},{'id':'4', name:'camera4',image:'product_4.jpg',desc:'hello,boy_4'},{'id':'5', name:'camera5',image:'product_5.jpg',desc:'hello,boy_5'}]");
			out.flush();
			out.close();
			System.out.println("get");
		}

		/**
		 * The doPost method of the servlet. <br>
		 *
		 * This method is called when a form has its tag value method equals to post.
		 * 
		 * @param request the request send by the client to the server
		 * @param response the response send by the server to the client
		 * @throws ServletException if an error occurred
		 * @throws IOException if an error occurred
		 */
		public void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {

			response.setContentType("text/json");
			
			PrintWriter out = response.getWriter();
			
			//out.println("[{image:'camera1','image':'product_1.jpg','desc':'hello,boy_1'},{'name':'camera2','image':'product_2.jpg','desc':'hello,boy_2'},{'name':'camera3','image':'product_3.jpg','desc':'hello,boy_3'},{'name':'camera4','image':'product_4.jpg','desc':'hello,boy_4'},{'name':'camera5','image':'product_5.jpg','desc':'hello,boy_5'}]");
			out.println("[{id:'1',name:'camera1',image':'product_1.jpg','desc':'hello,boy_1'},{id:2', 'name':'camera2','image':'product_2.jpg','desc':'hello,boy_2'},{id:'3', 'name':'camera3','image':'product_3.jpg','desc':'hello,boy_3'},{id:'4', 'name':'camera4','image':'product_4.jpg','desc':'hello,boy_4'},{id:'5', 'name':'camera5','image':'product_5.jpg','desc':'hello,boy_5'}]");
			out.flush();
			out.close();
			System.out.println("post");
		}

		/**
		 * Initialization of the servlet. <br>
		 *
		 * @throws ServletException if an error occurs
		 */
		public void init() throws ServletException {
			// Put your code here
		}

	}

